"use client";
import "./styles.css";
import menu from "../../public/menu.svg"
import Image from "next/image";
import arrowDown from "../../public/down-arrow.svg";
import {ReactNode, useState} from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import {getAdminUserDetails} from "@/helpers/api/admin/getAdminUserDetails";
import {getPlatinumUserDetails} from "@/helpers/api/PlatinumUsers/getPlatinumUserDetails";
import {getGoldUserDetails} from "@/helpers/api/GoldUsers/getGoldUserDetails";

const PlatinumLayout = ({children}: Readonly<{ children: ReactNode; }>) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenu = () => setIsMenuOpen(!isMenuOpen);
    return (
        <div className="background-primary-gold overflow-hidden border border-black h-screen ">
            <Header handleMenu={handleMenu} handleDetails={getGoldUserDetails} logoutLink="/gold-agent/login"/>
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


export default PlatinumLayout