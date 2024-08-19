import {NextRequest, NextResponse} from "next/server";
import Player from "@/models/PlayerDTO";


export const PUT = async (
    request: NextRequest,
) => {
    try {
        const body = await request.json();
        const {_id, balance} = body;
        const updatedPlayer = await Player.findById({_id});
        updatedPlayer.balance = updatedPlayer.balance + parseInt(balance)
        await updatedPlayer.save()
        const response = NextResponse.json({
            ...updatedPlayer,
            message: "Balance update successfully"
        })
        // console.log("response", response);
        return response
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}