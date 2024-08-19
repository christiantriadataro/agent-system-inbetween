"use client";
import Card from "@/components/Card"
import CardDownline from "@/components/CardDownline"
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import CreatePlatinumUserForm from "@/components/Platinum-Agent/CreatePlatinumUserForm";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import LoadBalanceForm from "@/components/Platinum-Agent/LoadBalanceForm";
import putLoadAdminUser from "@/helpers/api/admin/putLoadAdminUser";
import {format} from "@/helpers/format";
import putLoadPlatinumUser from "@/helpers/api/PlatinumUsers/putLoadPlatinumUser";
import {useCallback, useEffect, useState} from "react";
import {getPlatinumUsers} from "@/helpers/api/PlatinumUsers/getPlatinumUsers";
import getGoldUsers from "@/helpers/api/GoldUsers/getGoldUsers";
import CreateGoldUserForm from "@/components/Gold-Agent/CreateGoldUserForm";
import putLoadGoldUser from "@/helpers/api/GoldUsers/putLoadGoldUser";
import {getAdminUserDetails} from "@/helpers/api/admin/getAdminUserDetails";
import CopyLinkButton from "@/components/CopyLinkButton";
import {getPlatinumUserDetails} from "@/helpers/api/PlatinumUsers/getPlatinumUserDetails";

interface UserProps {
    _id: string,
    username: string,
    balance: string,
    firstName: string,
    lastName: string,
    location: string,
    mobileNumber: string,
}

const Dashboard = () => {
    const [goldUsers, setGoldUsers] = useState([]);
    const [linkId, setLinkId] = useState("")

    const handleGetGoldUsers = useCallback(async () => {
        try {
            const response = await getGoldUsers();
            console.log(response.data.data);
            setGoldUsers(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [])

    const handleLinkId = async () => {
        try {
            const response = await getPlatinumUserDetails();
            console.log("link", response.data.data);
            setLinkId(response.data.data._id);
        } catch (error: any) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        handleGetGoldUsers();
    }, []);

    useEffect(() => {
        handleLinkId()
    }, []);

    return (
        <div className="mx-4 mt-20  h-full">
            <div className="flex flex-row justify-between">
                <Dialog>
                    <DialogTrigger
                        className="btn-primary-plat border-2 border-black px-9 py-2 rounded-md text-xs text-black font-semibold">
                        Register Gold Agent
                    </DialogTrigger>
                    <DialogContent className="background-primary-gold">
                        <DialogHeader>
                            <DialogTitle>Register Gold Agent</DialogTitle>
                        </DialogHeader>
                        <CreateGoldUserForm/>
                    </DialogContent>
                </Dialog>
                <CopyLinkButton link="gold-agent" variant="plat"  id={linkId}/>
            </div>
            <div className="p-4 bg-black/50 mt-20">
                <Tabs defaultValue="admin-users" className="w-full text-white ">
                    <TabsList className="mx-4">
                        <TabsTrigger value="gold-users" className="border">Gold Users</TabsTrigger>
                    </TabsList>
                    <TabsContent value="gold-users" className="border mx-4">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Actions</TableHead>
                                    <TableHead>Username</TableHead>
                                    <TableHead>Balance</TableHead>
                                    <TableHead>Full Name</TableHead>
                                    <TableHead>Location</TableHead>
                                    <TableHead>Number</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {goldUsers.map((user: UserProps) => (
                                    <TableRow key={user._id}>
                                        <TableCell className="w-[300px]">
                                            <Dialog>
                                                <DialogTrigger
                                                    className="btn-primary-plat border-2 border-black px-4 py-1 rounded-md text-[8px] text-black font-extrabold">
                                                    Load
                                                </DialogTrigger>
                                                <DialogContent className="background-primary-plat">
                                                    <DialogHeader>
                                                        <DialogTitle>Load Platinum User</DialogTitle>
                                                    </DialogHeader>
                                                    <LoadBalanceForm _id={user._id} handleApi={putLoadGoldUser}/>
                                                </DialogContent>
                                            </Dialog>
                                        </TableCell>
                                        <TableCell>{user.username}</TableCell>
                                        <TableCell>{format(user.balance)}</TableCell>
                                        <TableCell>{user.firstName} {user.lastName}</TableCell>
                                        <TableCell>{user.location}</TableCell>
                                        <TableCell>{user.mobileNumber}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    )
}

export default Dashboard