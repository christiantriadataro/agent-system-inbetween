"use client"
import CustomInput from "@/app/components/CustomInput";
import backgroundImage from "../../../../public/background-plat.svg"
import "../../../platinum-agent/styles.css"
import CustomButton from "@/app/components/CustomButton";
const Login = () => {
  return (
    <div className="main w-full border border-black h-screen flex flex-col justify-end pb-20 ">
      <div className="flex flex-col gap-[26px] items-center mx-4">
        <CustomInput type="text" placeholder="Username: " />
        <CustomInput type="password" placeholder="Password: " />
        <CustomButton text="Login" link="/platinum-agent/dashboard" />
      </div>
   </div>
  )
}

export default Login;