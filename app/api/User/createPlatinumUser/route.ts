import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/helpers/databaseConfig";
import PlatinumUser from "@/models/PlatinumUserDTO"
import {getDataFromToken} from "@/helpers/getDataFromToken";
import {useParams} from "next/navigation";

export const POST = async (request: NextRequest) => {
    try {
        await connect();
        // const parent = await getDataFromToken(request);
        const requestBody = await request.json();
        const {username, firstName, lastName, location, mobileNumber, balance, password, parent} = requestBody;
        const checkUser = await PlatinumUser.findOne({username})
        if (checkUser) {
            return NextResponse.json({error: "PlatinumUser already exists"}, { status: 400 });
        }

        const signupUserAdmin = new PlatinumUser({
            username,
            password,
            firstName,
            lastName,
            location,
            mobileNumber,
            balance,
            parent
        })

        const savedPlatinumUser = await signupUserAdmin.save();

        return NextResponse.json({
            message: "Platinum User created successfully",
            success: true,
            savedPlatinumUser
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message}, { status: 500 })
    }
}