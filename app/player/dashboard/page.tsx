"use client";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {useCallback, useContext, useEffect, useState} from "react";
import CopyLinkButton from "@/components/CopyLinkButton";
import UserContext from "@/helpers/context/admin/UserDetails";
import CreateRequestForm from "@/components/CreateRequestForm";
import getRequestPlayers from "@/helpers/api/players/getRequestPlayers";

interface RequestProps {
    _id: string,
    from: string,
    to: string,
    type: string,
    amount: number,
    remarks: string,
    status: string,
}

const PlayerDashboard = () => {
    const [requests, setRequests] = useState([]);
    const userDetails = useContext(UserContext)

    const handleGetPlayers = useCallback(async () => {
        try {
            const response = await getRequestPlayers();
            console.log(response.data.data);
            setRequests(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [])


    useEffect(() => {
        handleGetPlayers();
    }, []);

    return (
        <div className="mx-4 mt-20  h-full">
            <div className="flex flex-row justify-between">
                <Dialog>
                    <DialogTrigger
                        className="btn-primary-player border-2 border-black  px-6 py-2 rounded-md text-xs text-black font-semibold">
                        Request
                    </DialogTrigger>
                    <DialogContent className="background-primary-player">
                        <DialogHeader>
                            <DialogTitle>Request</DialogTitle>
                        </DialogHeader>
                        <CreateRequestForm variant="player" userDetails={userDetails}/>
                    </DialogContent>
                </Dialog>
                <CopyLinkButton link="player" variant="silver" id={userDetails._id}/>
            </div>
            <div className="p-4 bg-black/50 mt-20">
                <Tabs defaultValue="admin-users" className="w-full text-white ">
                    <TabsList className="mx-4">
                        <TabsTrigger value="request-player" className="border">Request</TabsTrigger>
                    </TabsList>
                    <TabsContent value="request-player" className="border mx-4">
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

export default PlayerDashboard