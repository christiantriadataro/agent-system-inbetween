import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/helpers/utils/databaseConfig";
import Player from "@/models/PlayerDTO";
import {getDataFromToken} from "@/helpers/utils/getDataFromToken";

export const GET = async (request: NextRequest) => {
    try {
        await connect();
        const loggedId = await getDataFromToken(request);
        const users = await Player.find({ parent: loggedId })
        const response = NextResponse.json({
            data: users,
            message: "Player found",
        })
        return response
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}