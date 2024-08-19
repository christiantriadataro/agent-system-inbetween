"use client"
import "@/styles/globals.css"
import CustomWhiteInput from "@/components/CustomWhiteInput";
import CustomInputGroup from "@/components/CustomInputGroup";
import {ChangeEvent, FormEvent, useState} from "react";
import CustomButton from "@/components/CustomButton";
import {useParams, useRouter} from "next/navigation";
import PlatRegistration from "@/public/GoldAgentRegistration.svg"
import Image from "next/image";
import postGoldUser from "@/helpers/api/GoldUsers/postGoldUser";

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
    const [newGoldUser, setNewGoldUser] = useState(initialState)
    const [checkPassword, setCheckPassword] = useState("")
    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => setNewGoldUser({...newGoldUser, username: event.target.value,});
    const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => setNewGoldUser({...newGoldUser, firstName: event.target.value,});
    const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => setNewGoldUser({...newGoldUser, lastName: event.target.value,});
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => setNewGoldUser({...newGoldUser, password: event.target.value,});
    const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => setNewGoldUser({...newGoldUser, location: event.target.value,});
    const handleMobileNumberChange = (event: ChangeEvent<HTMLInputElement>) => setNewGoldUser({...newGoldUser, mobileNumber: event.target.value,});
    const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => setCheckPassword(event.target.value);
    const router = useRouter();
    const params = useParams();
    console.log(params);
    const handleSubmit = async (event: FormEvent) => {
        try {
            event.preventDefault();
            const response = await postGoldUser({...newGoldUser, parent: params.id})
            console.log("New Gold Agent Created", response.data);
            console.log("Gold Signup Success");
            router.push("/gold-agent/login");
        } catch (error: any ) {
            console.log(error)
        }
    }

    return (
        <div
            className={` background-primary-gold w-full border border-black h-screen flex flex-col justify-evenly gap-10 pb-20`}>
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
                <CustomButton variant="gold" text="Register"/>
            </form>
        </div>
    )
}

export default Register;