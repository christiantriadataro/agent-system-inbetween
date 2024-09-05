"use client";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import LoadBalanceForm from "@/components/Platinum-Agent/LoadBalanceForm";
import {format} from "@/helpers/utils/format";
import {useCallback, useContext, useEffect, useState} from "react";
import getSilverUsers from "@/helpers/api/SilverUsers/getSilverUsers";
import CreateSilverUserForm from "@/components/Silver-Agent/CreateSilverUserForm";
import putLoadSilverUser from "@/helpers/api/SilverUsers/putLoadSilverUser";
import CopyLinkButton from "@/components/CopyLinkButton";
import UserContext from "@/helpers/context/admin/UserDetails";

interface UserProps {
    _id: string,
    username: string,
    balance: string,
    firstName: string,
    lastName: string,
    location: string,
    mobileNumber: string,
}

const GoldDashboard = () => {
    const [silverUsers, setSilverUsers] = useState([]);
    const linkId = useContext(UserContext)._id


    const handleGetSilverUsers = useCallback(async () => {
        try {
            const response = await getSilverUsers();
            console.log(response.data.data);
            setSilverUsers(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [])

    useEffect(() => {
        handleGetSilverUsers();
    }, []);


    return (
        <div className="mx-4 mt-20  h-full">
            <div className="flex flex-row justify-between">
                <Dialog>
                    <DialogTrigger
                        className="btn-primary-gold border-2 border-black px-9 py-2 rounded-md text-xs text-black font-semibold">
                        Register Silver Agent
                    </DialogTrigger>
                    <DialogContent className="background-primary-gold">
                        <DialogHeader>
                            <DialogTitle>Register Silver Agent</DialogTitle>
                        </DialogHeader>
                        <CreateSilverUserForm/>
                    </DialogContent>
                </Dialog>
                <CopyLinkButton link="silver-agent" variant="gold" id={linkId}/>
            </div>
            <div className="p-4 bg-black/50 mt-20">
                <Tabs defaultValue="admin-users" className="w-full text-white ">
                    <TabsList className="mx-4">
                        <TabsTrigger value="gold-users" className="border">Silver Users</TabsTrigger>
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
                                {silverUsers.map((user: UserProps) => (
                                    <TableRow key={user._id}>
                                        <TableCell className="w-[300px]">
                                            <Dialog>
                                                <DialogTrigger
                                                    className="btn-primary-gold border-2 border-black px-4 py-1 rounded-md text-[8px] text-black font-extrabold">
                                                    Load
                                                </DialogTrigger>
                                                <DialogContent className="background-primary-silver">
                                                    <DialogHeader>
                                                        <DialogTitle>Load Silver User</DialogTitle>
                                                    </DialogHeader>
                                                    <LoadBalanceForm variant="silver" parentId={linkId} _id={user._id}
                                                                     handleApi={putLoadSilverUser}/>
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

export default GoldDashboard