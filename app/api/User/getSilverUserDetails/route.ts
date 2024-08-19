import {NextRequest, NextResponse} from "next/server";
import {getDataFromToken} from "@/helpers/getDataFromToken";
import SilverUser from "@/models/SilverUserDTO"

export const GET = async (request: NextRequest) => {
    try {
        const loggedId = await getDataFromToken(request);
        const silverUser = await SilverUser.findOne({_id: loggedId})
        const response = NextResponse.json({
            message: "Silver Id Found",
            data: silverUser
        })
        // console.log("getAdminUserDetails route: ", response);
        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message}, { status: 400 })
    }
}