import {NextRequest, NextResponse} from "next/server";
import {connect} from "@/helpers/databaseConfig";
import GoldUser from "@/models/GoldUserDTO"
import {getDataFromToken} from "@/helpers/getDataFromToken";

export const POST = async (request: NextRequest) => {
    try {
        await connect();
        // const parent = await getDataFromToken(request);
        const requestBody = await request.json();
        const {username, firstName, lastName, location, mobileNumber, balance, password, parent} = requestBody;
        const checkUser = await GoldUser.findOne({username})
        if (checkUser) {
            return NextResponse.json({error: "GoldUser already exists"}, { status: 400 });
        }

        const signupGoldUserAdmin = new GoldUser({
            username,
            password,
            firstName,
            lastName,
            location,
            mobileNumber,
            balance,
            parent
        })

        const savedGoldUser = await signupGoldUserAdmin.save();

        return NextResponse.json({
            message: "Gold User created successfully",
            success: true,
            savedGoldUser
        })

    } catch (error: any) {
        return NextResponse.json({error: error.message}, { status: 500 })
    }
}