import {NextRequest, NextResponse} from "next/server";
import SilverUser from "@/models/SilverUserDTO";
import GoldUser from "@/models/GoldUserDTO";


export const PUT = async (
    request: NextRequest,
) => {
    try {
        const body = await request.json();
        const {_id, balance, parent} = body;
        const parentUser = await GoldUser.findOne({_id: parent})
        parentUser.balance = parentUser.balance - parseInt(balance)
        await parentUser.save()

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