import {NextRequest, NextResponse} from "next/server";
import GoldUser from "@/models/GoldUserDTO";
import PlatinumUser from "@/models/PlatinumUserDTO";


export const PUT = async (
    request: NextRequest,
) => {
    try {
        const body = await request.json();
        const {_id, balance, parent} = body;
        const parentUser = await PlatinumUser.findOne({_id: parent})
        parentUser.balance = parentUser.balance - parseInt(balance)
        await parentUser.save()


        const updatedGoldUser = await GoldUser.findById({_id});
        updatedGoldUser.balance = updatedGoldUser.balance + parseInt(balance)
        await updatedGoldUser.save()
        const response = NextResponse.json({
            ...updatedGoldUser,
            message: "Balance update successfully"
        })
        // console.log("response", response);
        return response
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}