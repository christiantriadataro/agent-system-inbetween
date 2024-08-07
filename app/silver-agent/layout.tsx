"use client";
import "./styles.css";
import menu from "../../public/menu.svg"
import Image from "next/image";
import arrowDown from "../../public/down-arrow.svg";
import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const PlatinumLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  

  return (
    <div className="main-darken overflow-hidden border border-black h-screen ">
      <Header handleMenu={handleMenu} user="changoldagent" />
      <div className="flex flex-col relative h-full">
        <Sidebar isMenuOpen={isMenuOpen} />
        <div className="w-full">
          {children}
        </div>
      </div>
   </div>
  );
}


export default PlatinumLayout