import {NextRequest, NextResponse} from "next/server";
import PlatinumUser from "@/models/PlatinumUserDTO";


export const PUT = async (
    request: NextRequest,
) => {
    try {
        const body = await request.json();
        const {_id, balance} = body;
        const updatedPlatUser = await PlatinumUser.findById({_id});
        updatedPlatUser.balance = updatedPlatUser.balance + parseInt(balance)
        await updatedPlatUser.save()
        const response = NextResponse.json({
            ...updatedPlatUser,
            message: "Balance update successfully"
        })
        // console.log("response", response);
        return response
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}