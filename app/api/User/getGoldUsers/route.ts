import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/helpers/utils/databaseConfig";
import GoldUser from "@/models/GoldUserDTO";
import {getDataFromToken} from "@/helpers/utils/getDataFromToken";

export const GET = async (request: NextRequest) => {
    try {
        await connect();
        const loggedId = await getDataFromToken(request);
        const users = await GoldUser.find({ parent: loggedId })
        const response = NextResponse.json({
            data: users,
            message: "User found",
        })
        return response
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}