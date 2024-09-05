"use client";
import "./styles.css";
import {ReactNode, useLayoutEffect, useState} from "react";
import Header from "@/components/Header";
import UserContext from "@/helpers/context/admin/UserDetails";
import {getPlayerDetails} from "@/helpers/api/players/getPlayerDetails";

const initialUserDetails = {
    _id: "",
    username: "",
    balance: 0,
    parent: ""
}


const PlayerLayout = ({children}: Readonly<{ children: ReactNode; }>) => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const handleMenu = () => setIsMenuOpen(!isMenuOpen);
    const [userDetails, setUserDetails] = useState(initialUserDetails);

    const handleSilverUserDetails = async () => {
        try {
            const response = await getPlayerDetails();
            setUserDetails(response.data.data);
        } catch (error: any) {
            console.log(error.message);
        }
    }

    useLayoutEffect(() => {
        handleSilverUserDetails();
    }, [])

    return (
        <UserContext.Provider value={userDetails}>
            <div className="background-primary-player overflow-hidden border border-black h-screen ">
                <Header logoutLink="/player/login"/>
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


export default PlayerLayout