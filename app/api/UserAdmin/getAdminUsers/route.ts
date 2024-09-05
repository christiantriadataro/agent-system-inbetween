import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/helpers/utils/databaseConfig";
import UserAdmin from "@/models/UserAdminDTO";

export const GET = async (request: NextRequest)=> {
    try {
        await connect();
        const users = await UserAdmin.find()
        const response = NextResponse.json({
            data: users,
            message: "User found",
        })
        // console.log("response" + response.);
        return response
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}