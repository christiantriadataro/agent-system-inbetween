"use client";
import "@/app/globals.css";
import {ReactNode, useLayoutEffect, useState} from "react";
import Header from "@/components/Header";
import {getAdminUserDetails} from "@/helpers/api/admin/getAdminUserDetails";
import UserContext from "@/helpers/context/admin/UserDetails";

const initialUserDetails = {
    _id: "",
    username: "",
    balance: 0
}


const AdminLayout = ({children,}: Readonly<{ children: ReactNode; }>) => {
    // const [isMenuOpen, setIsMenuOpen] = useState(false);
    // const handleMenu = () => setIsMenuOpen(!isMenuOpen);
    const [userDetails, setUserDetails] = useState(initialUserDetails);

    const handleAdminUserDetails = async () => {
        try {
            const response = await getAdminUserDetails();
            setUserDetails(response.data.data);
        } catch (error: any) {
            console.log(error.message);
        }
    }

    useLayoutEffect(() => {
        handleAdminUserDetails();
    }, [])

    return (
        <UserContext.Provider value={userDetails}>
            <div className="background-primary-admin overflow-hidden border border-black h-screen ">
                {/*<Header handleMenu={handleMenu} handleDetails={getAdminUserDetails}  logoutLink="/admin/login"/>*/}
                <Header logoutLink="/admin/login"/>
                <div className="flex flex-row relative h-full">
                    {/*<Sidebar isMenuOpen={isMenuOpen} variant="admin"/>*/}
                    <div
                        // className={`${!isMenuOpen ? "-translate-x-40 " : ""} transition duration-300 w-full`}>
                        className={`transition duration-300 w-full`}>
                        {children}
                    </div>
                </div>
            </div>
        </UserContext.Provider>
    );
}


export default AdminLayout