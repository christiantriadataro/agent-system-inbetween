import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/helpers/utils/databaseConfig";
import PlatinumUser from "@/models/PlatinumUserDTO";
import {getDataFromToken} from "@/helpers/utils/getDataFromToken";

export const GET = async (request: NextRequest) => {
    try {
        await connect();
        const loggedId = await getDataFromToken(request);
        const users = await PlatinumUser.find({ parent: loggedId })
        const response = NextResponse.json({
            data: users,
            message: "User found",
        })
        // console.log("response" + response);
        return response
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}