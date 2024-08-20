"use client"
import "@/app/globals.css"
import CustomWhiteInput from "@/components/CustomWhiteInput";
import CustomInputGroup from "@/components/CustomInputGroup";
import {ChangeEvent, FormEvent, useState} from "react";
import CustomButton from "@/components/CustomButton";
import {useParams, useRouter} from "next/navigation";
import PlatRegistration from "@/public/PlatAgentRegistration.svg"
import Image from "next/image";
import postPlatinumUser from "@/helpers/api/PlatinumUsers/postPlatinumUser";

const initialState = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    location: "",
    mobileNumber: "",
    balance: 0
}

const Register = () => {
    const [newPlatUser, setNewPlatUser] = useState(initialState)
    const [checkPassword, setCheckPassword] = useState("")
    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => setNewPlatUser({...newPlatUser, username: event.target.value,});
    const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => setNewPlatUser({...newPlatUser, firstName: event.target.value,});
    const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => setNewPlatUser({...newPlatUser, lastName: event.target.value,});
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => setNewPlatUser({...newPlatUser, password: event.target.value,});
    const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => setNewPlatUser({...newPlatUser, location: event.target.value,});
    const handleMobileNumberChange = (event: ChangeEvent<HTMLInputElement>) => setNewPlatUser({...newPlatUser, mobileNumber: event.target.value,});
    const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => setCheckPassword(event.target.value);
    const router = useRouter();
    const params = useParams();
    console.log(params);
    const handleSubmit = async (event: FormEvent) => {
        try {
            event.preventDefault();
            const response = await postPlatinumUser({...newPlatUser, parent: params.id})
            console.log("New Plat Agent Created", response.data);
            console.log("Plat Signup Success");
            router.push("/platinum-agent/login");
        } catch (error: any ) {
            console.log(error)
        }
    }

    return (
        <div
            className={` background-primary-plat w-full border border-black h-screen flex flex-col justify-evenly gap-10 pb-20`}>
            <Image src={PlatRegistration}  alt="" className="w-7/12 lg:w-5/12 mt-5 mx-auto"/>
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
                <CustomButton variant="plat" text="Register"/>
            </form>
        </div>
    )
}

export default Register;