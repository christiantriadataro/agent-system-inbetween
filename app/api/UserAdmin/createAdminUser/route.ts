import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/helpers/databaseConfig";
import UserAdmin from "@/models/UserAdminDTO"

export const POST = async (request: NextRequest) => {
    try {
        await connect();
        const requestBody = await request.json();
        const {username, firstName, lastName, location, balance, mobileNumber, password} = requestBody;
        console.log("requestbody: ", requestBody)
        const checkUser = await UserAdmin.findOne({username})
        if (checkUser) {
            return NextResponse.json({error: "UserAdmin already exists"}, { status: 400 });
        }

        const signupUserAdmin = new UserAdmin({
            username,
            password,
            firstName,
            lastName,
            location,
            mobileNumber,
            balance
        })

        const savedUserAdmin = await signupUserAdmin.save();
        console.log("savedUserAdmin", savedUserAdmin);

        return NextResponse.json({
            message: "User Admin created successfully",
            success: true,
            savedUserAdmin
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message}, { status: 500 })
    }
}