import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/helpers/utils/databaseConfig";
import RequestPlayer from "@/models/TransactionPlayerDTO"

export const POST = async (request: NextRequest) => {
    try {
        await connect();
        const requestBody = await request.json();
        const status = "pending"
        const {from, to, type, amount, remarks} = requestBody;

        const requestPlayer = new RequestPlayer({
            from,
            to,
            type,
            amount,
            remarks,
            status
        })

        const savedRequestPlayer = await requestPlayer.save();

        return NextResponse.json({
            message: "Request Player created successfully",
            success: true,
            savedRequestPlayer
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}