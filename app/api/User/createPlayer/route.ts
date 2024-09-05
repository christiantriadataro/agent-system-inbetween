import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/helpers/utils/databaseConfig";
import Player from "@/models/PlayerDTO"
import {getDataFromToken} from "@/helpers/utils/getDataFromToken";

export const POST = async (request: NextRequest) => {
    try {
        await connect();
        // const parent = await getDataFromToken(request);
        const requestBody = await request.json();
        const {username, firstName, lastName, location, balance, parent, mobileNumber, password} = requestBody;
        const checkUser = await Player.findOne({username})
        if (checkUser) {
            return NextResponse.json({error: "Player already exists"}, { status: 400 });
        }

        const signupPlayer = new Player({
            username,
            password,
            firstName,
            lastName,
            location,
            mobileNumber,
            balance,
            parent
        })

        const savedPlayer = await signupPlayer.save();

        return NextResponse.json({
            message: "Player created successfully",
            success: true,
            savedPlayer
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message}, { status: 500 })
    }
}