import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';
import { NextResponse } from "next/server";
import { InvestmentService } from "../services/investment.js";
import { connectDb } from "../../libs/mongodb/connection.js";
import { UserService } from "../../user/services/user.js"

export const DELETE = withApiAuthRequired(async (request, { params }) => {
    try {
        await connectDb()
        const deleted = await InvestmentService.delete(params.id)
        return NextResponse.json({ ok: true, response: deleted })

    } catch (error) {
        console.error(error);
        return NextResponse.json({ ok: false, error: `${error.name}: ${error.message}` })
    }
})

export async function GET(request, { params }) {
    try {
        await connectDb()
        const investment = await InvestmentService.getById(params.id)
        return NextResponse.json({ ok: true, response: investment })

    } catch (error) {
        console.error(error);
        return NextResponse.json({ ok: false, error: `${error.name}: ${error.message}` })
    }

}

export const PATCH = withApiAuthRequired(async (request, { params }) => {
    try {
        await connectDb()
        const updatedData = await request.json()
        const investmentUpdated = await InvestmentService.patch(params.id, updatedData)

        return NextResponse.json({ ok: true, response: investmentUpdated })

    } catch (error) {
        console.error(error);
        return NextResponse.json({ ok: false, error: `${error.name}: ${error.message}` })
    }
})

export const POST = (async (request, { params }) => {
    try {
        await connectDb();
        const { user, investment, business } = await request.json();
        business.url = request.url
        investment.id = params.id

        await UserService.addInvestment(user.email, investment, business)
        const investmentUpdated = await InvestmentService.invest(user, investment);
        return NextResponse.json({ ok: true, response: investmentUpdated });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ ok: false, error: `${error.name}: ${error.message}` });
    }
});