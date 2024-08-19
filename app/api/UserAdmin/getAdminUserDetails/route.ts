import {NextRequest, NextResponse} from "next/server";
import {getDataFromToken} from "@/helpers/getDataFromToken";
import UserAdmin from "@/models/UserAdminDTO"

export const GET = async (request: NextRequest) => {
    try {
        const adminUserId = await getDataFromToken(request);
        const userAdmin = await UserAdmin.findOne({_id: adminUserId})
        const response = NextResponse.json({
            message: "User Admin Found",
            data: userAdmin
        })
        // console.log("getAdminUserDetails route: ", response);
        return response;
    } catch (error: any) {
        return NextResponse.json({ error: error.message}, { status: 400 })
    }
}