import {NextRequest, NextResponse} from "next/server";
import {getDataFromToken} from "@/helpers/getDataFromToken";
import GoldUser from "@/models/GoldUserDTO"

export const GET = async (request: NextRequest) => {
    try {
        const loggedId = await getDataFromToken(request);
        const goldUser = await GoldUser.findOne({_id: loggedId})
        const response = NextResponse.json({
            message: "Gold Id Found",
            data: goldUser
        })
        // console.log("getAdminUserDetails route: ", response);
        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message}, { status: 400 })
    }
}