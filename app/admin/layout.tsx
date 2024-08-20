"use client";
import "@/app/globals.css";
import {useState, ReactNode} from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {getAdminUserDetails} from "@/helpers/api/admin/getAdminUserDetails";


const AdminLayout = ({children,}: Readonly<{ children: ReactNode; }>) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenu = () => setIsMenuOpen(!isMenuOpen);
    return (
        <div className="background-primary-admin overflow-hidden border border-black h-screen ">
            <Header handleMenu={handleMenu} handleDetails={getAdminUserDetails}  logoutLink="/admin/login"/>
            <div className="flex flex-row relative h-full">
                <Sidebar isMenuOpen={isMenuOpen} variant="admin"/>
                <div
                    className={`${!isMenuOpen ? "-translate-x-40 " : ""} transition duration-300 w-full`}>
                    {children}
                </div>
            </div>
        </div>
    );
}


export default AdminLayout