"use client"
import "../../../gold-agent/styles.css"
import CustomWhiteInput from "@/components/CustomWhiteInput";
import CustomInputGroup from "@/components/CustomInputGroup";
import ButtomPrimary from "@/components/ButtomPrimary";
import postAdmin from "@/helpers/api/admin/postAdmin";
import {useState} from "react";
import CustomButton from "@/components/CustomButton";
import {useRouter} from "next/navigation";

const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    location: "",
    mobileNumber: "",
    balance: 100_000
}

const Register = () => {
    const [user, setUser] = useState(initialState)
    const [checkPassword, setCheckPassword] = useState("")
    const handleUsernameChange = event => setUser({...user, username: event.target.value,});
    const handleFirstNameChange = event => setUser({...user, firstName: event.target.value,});
    const handleLastNameChange = event => setUser({...user, lastName: event.target.value,});
    const handlePasswordChange = event => setUser({...user, password: event.target.value,});
    const handleLocationChange = event => setUser({...user, location: event.target.value,});
    const handleMobileNumberChange = event => setUser({...user, mobileNumber: event.target.value,});
    const handleConfirmPasswordChange = event => setCheckPassword(event.target.value);
    const router = useRouter();

    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
            const response = await postAdmin(user)
            console.log(response.data);
            console.log("Admin Signup Success");
            router.push("/admin/login");
        } catch (error: any ) {
            console.log(error)
        }
    }

    return (
        <div
            className={` background-primary-gold w-full border border-black h-screen flex flex-col justify-evenly gap-10 pb-20`}>
            <p className="w-7/12 lg:w-5/12 mt-5 mx-auto">Admin</p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-[30px] items-center mx-4 md:mx-6 lg:mx-10">
                <CustomWhiteInput type="text" placeholder="Username: " onChange={handleUsernameChange}/>
                <CustomInputGroup>
                    <CustomWhiteInput type="text" placeholder="First Name: " onChange={handleFirstNameChange}/>
                    <CustomWhiteInput type="text" placeholder="Last Name: " onChange={handleLastNameChange}/>
                </CustomInputGroup>
                <CustomInputGroup>
                    <CustomWhiteInput type="password" placeholder="Password: " onChange={handlePasswordChange}/>
                    <CustomWhiteInput type="password" placeholder="Confirm Password: " onChange={handleConfirmPasswordChange}/>
                </CustomInputGroup>
                <CustomWhiteInput placeholder="Location" onChange={handleLocationChange}/>
                <CustomWhiteInput placeholder="Mobile Number: " onChange={handleMobileNumberChange}/>
                <ButtomPrimary text="Register"/>
            </form>
        </div>
    )
}

export default Register;