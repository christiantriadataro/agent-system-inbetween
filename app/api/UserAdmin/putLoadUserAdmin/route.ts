import {NextRequest, NextResponse} from "next/server";
import UserAdmin from "@/models/UserAdminDTO";


export const PUT = async (
    request: NextRequest,
) => {
    try {
        const body = await request.json();
        const {_id, balance} = body;
        const updatedUserAdmin = await UserAdmin.findById({_id});
        updatedUserAdmin.balance = updatedUserAdmin.balance + parseInt(balance)
        await updatedUserAdmin.save()
        const response = NextResponse.json({
            ...updatedUserAdmin,
            message: "Balance update successfully"
        })
        // console.log("response", response);
        return response
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}