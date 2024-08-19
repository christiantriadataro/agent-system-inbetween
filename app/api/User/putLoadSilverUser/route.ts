import {NextRequest, NextResponse} from "next/server";
import SilverUser from "@/models/SilverUserDTO";


export const PUT = async (
    request: NextRequest,
) => {
    try {
        const body = await request.json();
        const {_id, balance} = body;
        const updatedSilverUser = await SilverUser.findById({_id});
        updatedSilverUser.balance = updatedSilverUser.balance + parseInt(balance)
        await updatedSilverUser.save()
        const response = NextResponse.json({
            ...updatedSilverUser,
            message: "Balance update successfully"
        })
        // console.log("response", response);
        return response
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}