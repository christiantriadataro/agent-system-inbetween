"use client";
import "./styles.css";
import {ReactNode, useLayoutEffect, useState} from "react";
import Header from "@/components/Header";
import UserContext from "@/helpers/context/admin/UserDetails";
import {getGoldUserDetails} from "@/helpers/api/GoldUsers/getGoldUserDetails";

const initialUserDetails = {
    _id: "",
    username: "",
    balance: 0
}

const PlatinumLayout = ({children}: Readonly<{ children: ReactNode; }>) => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const handleMenu = () => setIsMenuOpen(!isMenuOpen);
    const [userDetails, setUserDetails] = useState(initialUserDetails);

    const handleGoldUserDetails = async () => {
        try {
            const response = await getGoldUserDetails();
            setUserDetails(response.data.data);
        } catch (error: any) {
            console.log(error.message);
        }
    }

    useLayoutEffect(() => {
        handleGoldUserDetails();
    }, [])


    return (
        <UserContext.Provider value={userDetails}>
            <div className="background-primary-gold overflow-hidden border border-black h-screen ">
                <Header logoutLink="/gold-agent/login"/>
                <div className="flex flex-row relative h-full">
                    {/*<Sidebar isMenuOpen={isMenuOpen} variant="admin"/>*/}
                    <div
                        className={`transition duration-300 w-full`}>
                        {children}
                    </div>
                </div>
            </div>
        </UserContext.Provider>
    );
}


export default PlatinumLayout