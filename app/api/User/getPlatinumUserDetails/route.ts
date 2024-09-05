import {NextRequest, NextResponse} from "next/server";
import {getDataFromToken} from "@/helpers/utils/getDataFromToken";
import PlatinumUser from "@/models/PlatinumUserDTO"

export const GET = async (request: NextRequest) => {
    try {
        const loggedId = await getDataFromToken(request);
        const platUser = await PlatinumUser.findOne({_id: loggedId})
        const response = NextResponse.json({
            message: "Plat Id Found",
            data: platUser
        })
        // console.log("getAdminUserDetails route: ", response);
        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message}, { status: 400 })
    }
}