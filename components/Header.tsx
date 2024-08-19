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
import {memo, useCallback, useLayoutEffect, useMemo, useState} from "react";
import {getAdminUserDetails} from "@/helpers/api/admin/getAdminUserDetails";
import {format} from "@/helpers/format";
import {AxiosResponse} from "axios";


interface HeaderProps {
    handleMenu: () => void,
    handleDetails: () => any,
    logoutLink: string
}

const initialUserDetails = {
    _id: "",
    username: "",
    balance: 0
}

const Header = ({handleMenu, handleDetails, logoutLink}: HeaderProps) => {
    const router = useRouter();
    const [userDetails, setUserDetails] = useState(initialUserDetails);

    const handleAdminUserDetails = async () => {
        try {
            // if (userDetails.username == "") return;getAdminUserDetails
            const response = await handleDetails();
            console.log("handleAdminUserDetails", response.data);
            setUserDetails(response.data.data);
        } catch (error: any) {
            console.log(error.message);
        }
    }
  

    const handleLogout = async () => {
        try {
            const response = await AdminLogout();
            console.log("Logout success", response.data);
            router.push(logoutLink);
        } catch (error: any) {
            console.log(error);
        }
    }

    useLayoutEffect(() => {
        handleAdminUserDetails();
    }, [])

    return (
        <nav
            className="h-[51px] w-full text-white black-linear-vertical rounded-b-md flex items-center justify-between pl-2 pr-4 lg:pr-7 xl:pr-20 lg:pl-5 xl:pl-6 text-sm">
            <div className="flex gap-4 items-center">
                <button onClick={handleMenu}>
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