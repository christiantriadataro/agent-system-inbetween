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
import {useCallback, useEffect, useLayoutEffect, useState} from "react";
import {getPlatinumUsers} from "@/helpers/api/PlatinumUsers/getPlatinumUsers";
import getGoldUsers from "@/helpers/api/GoldUsers/getGoldUsers";
import CreateGoldUserForm from "@/components/Gold-Agent/CreateGoldUserForm";
import putLoadGoldUser from "@/helpers/api/GoldUsers/putLoadGoldUser";
import getSilverUsers from "@/helpers/api/SilverUsers/getSilverUsers";
import CreateSilverUserForm from "@/components/Silver-Agent/CreateSilverUserForm";
import putLoadSilverUser from "@/helpers/api/SilverUsers/putLoadSilverUser";
import getPlayers from "@/helpers/api/players/getPlayers";
import CreatePlayerForm from "@/components/Player/CreatePlayerForm";
import putLoadPlayer from "@/helpers/api/players/putLoadPlayer";
import {getGoldUserDetails} from "@/helpers/api/GoldUsers/getGoldUserDetails";
import CopyLinkButton from "@/components/CopyLinkButton";
import {getSilverUserDetails} from "@/helpers/api/SilverUsers/getSilverUserDetails";

interface UserProps {
    _id: string,
    username: string,
    balance: string,
    firstName: string,
    lastName: string,
    location: string,
    mobileNumber: string,
}

const SilverDashboard = () => {
    const [players, setPlayers] = useState([]);
    const [linkId, setLinkId] = useState("")
    const handleGetPlayers = useCallback(async () => {
        try {
            const response = await getPlayers();
            console.log(response.data.data);
            setPlayers(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [])
    const handleLinkId = async () => {
        try {
            const response = await getSilverUserDetails();
            console.log("link", response.data.data);
            setLinkId(response.data.data._id);
        } catch (error: any) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        handleGetPlayers();
    }, []);

    useLayoutEffect(() => {
        handleLinkId()
    }, []);
    return (
        <div className="mx-4 mt-20  h-full">
            <div className="flex flex-row justify-between">
                <Dialog>
                    <DialogTrigger
                        className="btn-primary-silver border-2 border-black  px-6 py-2 rounded-md text-xs text-black font-semibold">
                        Register Player
                    </DialogTrigger>
                    <DialogContent className="background-primary-silver">
                        <DialogHeader>
                            <DialogTitle>Register Player</DialogTitle>
                        </DialogHeader>
                        <CreatePlayerForm/>
                    </DialogContent>
                </Dialog>
                <CopyLinkButton link="player" variant="silver" id={linkId}/>
            </div>
            <div className="p-4 bg-black/50 mt-20">
                <Tabs defaultValue="admin-users" className="w-full text-white ">
                    <TabsList className="mx-4">
                        <TabsTrigger value="gold-users" className="border">Players</TabsTrigger>
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
                                {players.map((user: UserProps) => (
                                    <TableRow key={user._id}>
                                        <TableCell className="w-[300px]">
                                            <Dialog>
                                                <DialogTrigger
                                                    className="btn-primary-silver border-2 border-black px-4 py-1 rounded-md text-[8px] text-black font-extrabold">
                                                    Load
                                                </DialogTrigger>
                                                <DialogContent className="background-primary-plat">
                                                    <DialogHeader>
                                                        <DialogTitle>Load Player</DialogTitle>
                                                    </DialogHeader>
                                                    <LoadBalanceForm _id={user._id} handleApi={putLoadPlayer}/>
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

export default SilverDashboard