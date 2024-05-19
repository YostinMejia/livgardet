import { NextResponse } from "next/server.js"
import { UserService } from "./services/user.js"
import { connectDb } from "../libs/mongodb/connection.js"

export const POST = async (request) => {

    try {
        await connectDb()
        const newUser = await UserService.create(await request.json())
        return NextResponse.json({ ok: true, response: newUser })

    } catch (error) {
        console.error(error);
        return NextResponse.json({ ok: false, error: `${error.name}: ${error.message}` })
    }

}
