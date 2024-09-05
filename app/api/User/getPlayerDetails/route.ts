import {NextRequest, NextResponse} from "next/server";
import {getDataFromToken} from "@/helpers/utils/getDataFromToken";
import Player from "@/models/PlayerDTO"

export const GET = async (request: NextRequest) => {
    try {
        const loggedId = await getDataFromToken(request);
        const playerUser = await Player.findOne({_id: loggedId})
        const response = NextResponse.json({
            message: "Player Found",
            data: playerUser
        })
        // console.log("getAdminUserDetails route: ", response);
        return response;
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}