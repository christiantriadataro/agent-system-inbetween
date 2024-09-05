"use client"
import "@/app/globals.css"
import {ChangeEvent, FormEvent, useState} from "react";
import CustomWhiteInput from "@/components/CustomWhiteInput";
import ButtomPrimary from "@/components/ButtomPrimary";
import {useRouter} from "next/navigation";
import {PlayerLogin} from "@/helpers/api/players/auth";

const PlayerLoginPage = () => {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value);
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value);

    const handleSubmit = async (event: FormEvent) => {
        try {
            event.preventDefault();
            const response = await PlayerLogin(username, password);
            console.log("Login success", response.data);
            router.push("/player/dashboard");
        } catch (error: any) {
            console.log(error);
        }
    }

    return (
        <div className="background-primary-player w-full border border-black h-screen flex flex-col justify-end pb-20 ">
            <form onSubmit={handleSubmit} className="flex flex-col gap-[26px] items-center mx-4">
                <CustomWhiteInput type="text" placeholder="Username: " onChange={handleUsernameChange}/>
                <CustomWhiteInput type="password" placeholder="Password: " onChange={handlePasswordChange}/>
                <ButtomPrimary text="Login" variant="player"/>
            </form>
        </div>
    )
}

export default PlayerLoginPage;