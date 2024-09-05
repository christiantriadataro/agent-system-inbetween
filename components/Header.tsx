import Image from "next/image";
import arrowDown from "../public/down-arrow.svg";
import menu from "../public/menu.svg"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {AdminLogout} from "@/helpers/api/admin/auth";
import {useRouter} from "next/navigation";
import {memo, useCallback, useContext, useLayoutEffect, useMemo, useState} from "react";
import {getAdminUserDetails} from "@/helpers/api/admin/getAdminUserDetails";
import {format} from "@/helpers/utils/format";
import {AxiosResponse} from "axios";
import UserContext from "@/helpers/context/admin/UserDetails";


interface HeaderProps {
    logoutLink: string
}



const Header = ({logoutLink}: HeaderProps) => {
    const router = useRouter();
    const userDetails = useContext(UserContext)

    const handleLogout = async () => {
        try {
            const response = await AdminLogout();
            console.log("Logout success", response.data);
            router.push(logoutLink);
        } catch (error: any) {
            console.log(error);
        }
    }

    return (
        <nav
            className="h-[51px] w-full text-white black-linear-vertical rounded-b-md flex items-center justify-between pl-2 pr-4 lg:pr-7 xl:pr-20 lg:pl-5 xl:pl-6 text-sm">
            <div className="flex gap-4 items-center">
                <button>
                    <Image src={menu} alt=""/>
                </button>
                <div className="rounded-2xl border-2 border-another px-6 py-[2px] font-medium">
                    <span className="mr-1 font-semibold">₱</span>{format(userDetails.balance)}
                </div>
            </div>
            <div className="flex gap-2 items-center font-semibold relative ">
                <div>{userDetails.username}</div>
                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className="relative border-2 border-another rounded-full">
                            <div className="main rounded-full w-[30px] h-[30px] border border-black"></div>
                            <div className="rounded-full  absolute black-linear-vertical bottom-0 right-0">
                                <Image className="" src={arrowDown} alt=""/>
                            </div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="text-white black-linear-vertical">
                        <button onClick={handleLogout}>
                            <DropdownMenuLabel>Logout</DropdownMenuLabel>
                        </button>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </nav>
    )
}

export default Header;