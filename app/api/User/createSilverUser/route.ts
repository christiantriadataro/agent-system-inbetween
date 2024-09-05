import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/helpers/utils/databaseConfig";
import SilverUser from "@/models/SilverUserDTO"
import {getDataFromToken} from "@/helpers/utils/getDataFromToken";

export const POST = async (request: NextRequest) => {
    try {
        await connect();
        // const parent = await getDataFromToken(request);
        const requestBody = await request.json();
        const {username, firstName, lastName, location, balance, parent, mobileNumber, password} = requestBody;
        const checkUser = await SilverUser.findOne({username})
        if (checkUser) {
            return NextResponse.json({error: "SilverUser already exists"}, { status: 400 });
        }

        const signupSilverUserAdmin = new SilverUser({
            username,
            password,
            firstName,
            lastName,
            location,
            mobileNumber,
            balance,
            parent
        })

        const savedSilverUser = await signupSilverUserAdmin.save();

        return NextResponse.json({
            message: "Silver User created successfully",
            success: true,
            savedSilverUser
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message}, { status: 500 })
    }
}