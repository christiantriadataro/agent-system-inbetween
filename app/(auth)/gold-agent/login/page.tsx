"use client"
import CustomInput from "@/components/CustomInput";
import backgroundImage from "../../../../public/background-plat.svg"
import "@/app/globals.css"
import CustomButton from "@/components/CustomButton";
import {ChangeEvent, FormEvent, useState} from "react";
import CustomWhiteInput from "@/components/CustomWhiteInput";
import ButtomPrimary from "@/components/ButtomPrimary";
import {AdminLogin} from "@/helpers/api/admin/auth"
import {useRouter} from "next/navigation";
import {PlatLogin} from "@/helpers/api/PlatinumUsers/auth";
import {GoldLogin} from "@/helpers/api/GoldUsers/auth";
const Login = () => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value);
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

    const handleSubmit = async (event: FormEvent) => {
        try {
            event.preventDefault();
            const response = await GoldLogin(username, password);
            console.log("Login success", response.data);
            router.push("/gold-agent/dashboard");
        } catch (error: any) {
            console.log(error);
        }
    }

    return (
        <div className="background-primary-gold w-full border border-black h-screen flex flex-col justify-end pb-20 ">
            <form onSubmit={handleSubmit} className="flex flex-col gap-[26px] items-center mx-4">
                <CustomWhiteInput type="text" placeholder="Username: " onChange={handleUsernameChange} />
                <CustomWhiteInput type="password" placeholder="Password: " onChange={handlePasswordChange} />
                <ButtomPrimary text="Login" variant="gold"  />
            </form>
        </div>
    )
}

export default Login;