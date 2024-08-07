"use client"
import CustomInput from "@/app/components/CustomInput";
import backgroundImage from "../../../../public/background-plat.svg"
import "../../../gold-agent/styles.css"
import CustomButton from "@/app/components/CustomButton";
import CustomWhiteInput from "@/app/components/CustomWhiteInput";
import CustomInputGroup from "@/app/components/CustomInputGroup";
import ButtomPrimary from "@/app/components/ButtomPrimary";
import {montserrat} from "@/app/fonts";
import Image from "next/image";
import GoldAgentRegistration from "../../../../public/Gold Agent Registration.svg"


const Register = () => {
    return (
        <div className={` background-primary-gold w-full border border-black h-screen flex flex-col justify-evenly gap-10 pb-20`}>
            <Image src={GoldAgentRegistration}  alt="" className="w-7/12 lg:w-5/12 mt-5 mx-auto"/>
            <div className="flex flex-col gap-[30px] items-center mx-4 md:mx-6 lg:mx-10">
                <CustomWhiteInput type="text" placeholder="Username: "/>
                <CustomInputGroup>
                    <CustomWhiteInput type="text" placeholder="First Name: "/>
                    <CustomWhiteInput type="text" placeholder="Last Name: "/>
                </CustomInputGroup>
                <CustomInputGroup>
                    <CustomWhiteInput type="password" placeholder="Password: "/>
                    <CustomWhiteInput type="password" placeholder="Confirm Password: "/>
                </CustomInputGroup>
                <CustomWhiteInput placeholder="Location" />
                <CustomWhiteInput placeholder="Mobile Number: " />
                <ButtomPrimary text="Register" />
            </div>
        </div>
    )
}

export default Register;