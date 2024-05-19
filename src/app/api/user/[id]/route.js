
import { NextResponse } from "next/server.js"
import { UserService } from "../services/user.js"
import { connectDb } from "../../libs/mongodb/connection.js"

export const GET = async (request, {params}) => {
    try {
        await connectDb()
        const user = await UserService.getById(params.id)
        console.log(user);
        return NextResponse.json({ ok: true, response: user })

    } catch (error) {
        console.error(error);
        return NextResponse.json({ ok: false, error: `${error.name}: ${error.message}` })
    }

}