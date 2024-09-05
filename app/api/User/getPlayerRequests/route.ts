import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/helpers/utils/databaseConfig";
import RequestPlayer from "@/models/TransactionPlayerDTO";
import {getDataFromToken} from "@/helpers/utils/getDataFromToken";

export const GET = async (request: NextRequest) => {
    try {
        await connect();
        const loggedId = await getDataFromToken(request);
        const requests = await RequestPlayer.find({to: loggedId})
        const response = NextResponse.json({
            data: requests,
            message: "Requests found",
        })
        return response
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}