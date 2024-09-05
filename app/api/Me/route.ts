import {NextRequest, NextResponse} from "next/server";
import {getDataFromToken} from "@/helpers/utils/getDataFromToken";

export const PUT = async (
    request: NextRequest,
) => {
    try {
        const loggedId = await getDataFromToken(request);
        // console.log("response", response);
        return NextResponse.json({
            id: loggedId,
            message: "Get ID Successfully"
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400})
    }
}