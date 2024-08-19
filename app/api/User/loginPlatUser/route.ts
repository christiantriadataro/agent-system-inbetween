import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/helpers/databaseConfig";
import PlatUser from "@/models/PlatinumUserDTO"
import jwt from "jsonwebtoken";

export const POST = async (request: NextRequest) => {
    try {
        await connect();
        const requestBody = await request.json();
        const {username, password} = requestBody;
        console.log(requestBody);

        const user = await PlatUser.findOne({username});
        if (!user) {
            return NextResponse.json({error: "Plat User does not exist"}, {status: 400})
        }

        if (password !== user.password) {
            return NextResponse.json({ error: "Invalid Password"}, {status: 400})
        }

        const tokenData = {
            id: user._id,
            username: user.username,
            email: user.email
        }

        const token = jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "1h"})
        const response = NextResponse.json(
            {
                message: "Login Successful",
                success: true
            })
        // console.log(token);

        response.cookies.set("token", token, {
            httpOnly: true
        })

        return response

    } catch (error: any) {
        return NextResponse.json( {error: error.message }, { status: 500 })
    }
}