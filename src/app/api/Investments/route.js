import { withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server'
import { InvestmentService } from './services/investment.js'
import { connectDb } from "../libs/mongodb/connection.js"

export async function GET(request) {
    try {
        await connectDb()
        const investment = await InvestmentService.get()
        return NextResponse.json({ ok: true, response: investment })

    } catch (error) {
        console.error(error);
        return NextResponse.json({ ok: false, error: `${error.name}: ${error.message}` })
    }
}

export const POST = withApiAuthRequired(async (request) => {
    try {
        await connectDb()
        const newInvestment = await InvestmentService.create(await request.json())
        return NextResponse.json({ ok: true, response: newInvestment })

    } catch (error) {
        console.error(error);
        return NextResponse.json({ ok: false, error: `${error.name}: ${error.message}` })
    }

}
)
