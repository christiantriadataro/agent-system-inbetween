"use client";
import "@/app/globals.css";
import {ReactNode, useLayoutEffect, useState} from "react";
import Header from "@/components/Header";
import {getPlatinumUserDetails} from "@/helpers/api/PlatinumUsers/getPlatinumUserDetails";
import UserContext from "@/helpers/context/admin/UserDetails";

const initialUserDetails = {
    _id: "",
    username: "",
    balance: 0,
    parent: ""
}

const PlatinumLayout = ({children}: Readonly<{ children: ReactNode; }>) => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const handleMenu = () => setIsMenuOpen(!isMenuOpen);
    const [userDetails, setUserDetails] = useState(initialUserDetails);

    const handlePlatUserDetails = async () => {
        try {
            const response = await getPlatinumUserDetails();
            setUserDetails(response.data.data);
        } catch (error: any) {
            console.log(error.message);
        }
    }

    useLayoutEffect(() => {
        handlePlatUserDetails();
    }, [])


    return (
        <UserContext.Provider value={userDetails}>
            <div className="background-primary-plat overflow-hidden border border-black h-screen ">
                {/*<Header handleMenu={handleMenu} handleDetails={getPlatinumUserDetails} logoutLink="/platinum-agent/login"/>*/}
                <Header logoutLink="/platinum-agent/login"/>
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