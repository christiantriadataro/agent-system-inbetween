"use client";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import LoadBalanceForm from "@/components/Platinum-Agent/LoadBalanceForm";
import {format} from "@/helpers/utils/format";
import {useCallback, useContext, useEffect, useState} from "react";
import getPlayers from "@/helpers/api/players/getPlayers";
import CreatePlayerForm from "@/components/Player/CreatePlayerForm";
import putLoadPlayer from "@/helpers/api/players/putLoadPlayer";
import CopyLinkButton from "@/components/CopyLinkButton";
import UserContext from "@/helpers/context/admin/UserDetails";
import CreateRequestForm from "@/components/CreateRequestForm";
import getPlayerRequests from "@/helpers/api/players/getPlayerRequests";

interface UserProps {
    _id: string,
    username: string,
    balance: string,
    firstName: string,
    lastName: string,
    location: string,
    mobileNumber: string,
}

interface RequestProps {
    _id: string,
    from: string,
    to: string,
    type: string,
    amount: number,
    remarks: string,
    status: string,
}

const SilverDashboard = () => {
    const [players, setPlayers] = useState([]);
    const [requests, setRequests] = useState([]);
    const userDetails = useContext(UserContext)

    const handleGetPlayers = useCallback(async () => {
        try {
            const response = await getPlayers();
            console.log(response.data.data);
            setPlayers(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [])

    const handleGetRequestPlayers = useCallback(async () => {
        try {
            const response = await getPlayerRequests();
            console.log(response.data.data);
            setRequests(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [])


    useEffect(() => {
        handleGetPlayers();
    }, []);

    useEffect(() => {
        handleGetRequestPlayers();
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
                <Dialog>
                    <DialogTrigger
                        className="btn-primary-silver border-2 border-black  px-6 py-2 rounded-md text-xs text-black font-semibold">
                        Request
                    </DialogTrigger>
                    <DialogContent className="background-primary-silver">
                        <DialogHeader>
                            <DialogTitle>Request to Gold Agent</DialogTitle>
                        </DialogHeader>
                        <CreateRequestForm userDetails={userDetails} variant="silver"/>
                    </DialogContent>
                </Dialog>
                <CopyLinkButton link="player" variant="silver" id={userDetails._id}/>
            </div>
            <div className="p-4 bg-black/50 mt-20">
                <Tabs defaultValue="admin-users" className="w-full text-white ">
                    <TabsList className="mx-4">
                        <TabsTrigger value="gold-users" className="border">Players</TabsTrigger>
                        <TabsTrigger value="request-players" className="border">Player Request</TabsTrigger>
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
                                                <DialogContent className="background-primary-player">
                                                    <DialogHeader>
                                                        <DialogTitle>Load Player</DialogTitle>
                                                    </DialogHeader>
                                                    <LoadBalanceForm variant="player" parentId={userDetails._id}
                                                                     _id={user._id}
                                                                     handleApi={putLoadPlayer}/>
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
                    <TabsContent value="request-players" className="border mx-4">
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Actions</TableHead>
                                    <TableHead>Username</TableHead>
                                    <TableHead>Type</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Remarks</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {requests.map((request: RequestProps) => (
                                    <TableRow key={request._id}>
                                        <TableCell className="w-[300px]">
                                            <Dialog>
                                                <DialogTrigger
                                                    className="btn-primary-silver border-2 border-black px-4 py-1 rounded-md text-[8px] text-black font-extrabold">
                                                    Load
                                                </DialogTrigger>
                                                <DialogContent className="background-primary-player">
                                                    <DialogHeader>
                                                        <DialogTitle>Load Player</DialogTitle>
                                                    </DialogHeader>
                                                    {/*<LoadBalanceForm variant="player" parentId={userDetails._id}*/}
                                                    {/*                 _id={user._id}*/}
                                                    {/*                 handleApi={putLoadPlayer}/>*/}
                                                </DialogContent>
                                            </Dialog>
                                        </TableCell>
                                        <TableCell>{request.from}</TableCell>
                                        <TableCell>{request.type}</TableCell>
                                        <TableCell>{request.amount}</TableCell>
                                        <TableCell>{request.remarks}</TableCell>
                                        <TableCell>{request.status}</TableCell>
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