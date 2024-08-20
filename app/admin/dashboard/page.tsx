"use client"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {ChangeEvent, useCallback, useEffect, useLayoutEffect, useState} from "react";
import {getAdmins} from "@/helpers/api/admin/getAdmins";
import {getPlatinumUsers} from "@/helpers/api/PlatinumUsers/getPlatinumUsers";
import {format} from "@/helpers/format";
import CreatePlatinumUserForm from "@/components/Platinum-Agent/CreatePlatinumUserForm";
import LoadBalanceForm from "@/components/Platinum-Agent/LoadBalanceForm";
import putLoadAdminUser from "@/helpers/api/admin/putLoadAdminUser";
import putLoadPlatinumUser from "@/helpers/api/PlatinumUsers/putLoadPlatinumUser";
import CopyLinkButton from "@/components/CopyLinkButton";
import {getAdminUserDetails} from "@/helpers/api/admin/getAdminUserDetails";

interface UserProps  {
    _id: string,
    username: string,
    balance: string,
    firstName: string,
    lastName: string,
    location: string,
    mobileNumber: string,
}

interface newPlatUserProps  {
    _id: string,
    username: string,
    password: string,
    balance: string,
    firstName: string,
    lastName: string,
    location: string,
    mobileNumber: string,
}


const AdminDashboardPage = () => {
    const [admins, setAdmins] = useState([])
    const [platUsers, setPlatUsers] = useState([])
    const [linkId, setLinkId] = useState("")



    const handleGetAdmins = useCallback(async () => {
        try {
            const response = await getAdmins();
            console.log(response.data.data);
            setAdmins(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [])

    const handleGetPlatUsers = useCallback(async () => {
        try {
            const response = await getPlatinumUsers();
            console.log(response.data.data);
            setPlatUsers(response.data.data);
        } catch (error) {
            console.log(error);
        }
    }, [])

    const handleLinkId = async () => {
        try {
            const response = await getAdminUserDetails();
            console.log("link", response.data.data);
            setLinkId(response.data.data._id);
        } catch (error: any) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        handleGetAdmins();
    }, []);

    useEffect(() => {
        handleGetPlatUsers();
    }, []);

    useLayoutEffect(() => {
        handleLinkId()
    }, []);


    return (
        <div className="mx-4 mt-20  h-full ">
            <div className="flex flex-row justify-between">

                <Dialog>
                    <DialogTrigger className="btn-primary-admin border-2 border-black px-9 py-2 rounded-md text-xs text-black font-semibold">
                        Register Platinum Agent
                    </DialogTrigger>
                    <DialogContent className="background-primary-plat">
                        <DialogHeader>
                            <DialogTitle>Register Platinum Agent</DialogTitle>
                        </DialogHeader>
                        <CreatePlatinumUserForm/>
                    </DialogContent>
                </Dialog>
                <CopyLinkButton id={linkId}   link="platinum-agent" variant="admin"/>
            </div>
            <div className="p-4 bg-black/50 mt-20">
               <Tabs defaultValue="admin-users" className="w-full text-white ">
                   <TabsList className="mx-4">
                       <TabsTrigger value="admin-users" className="border">Admin</TabsTrigger>
                       <TabsTrigger value="plat-users" className="border">Platinum Users</TabsTrigger>
                   </TabsList>
                   <TabsContent value="admin-users" className="border mx-4">
                       <Table >
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
                               {admins.map((admin: UserProps) => (
                                   <TableRow key={admin._id}>
                                       <TableCell className="w-[300px]">
                                           <Dialog>
                                               <DialogTrigger className="btn-primary-admin border-2 border-black px-4 py-1 rounded-md text-[8px] text-black font-extrabold">
                                                   Load
                                               </DialogTrigger>
                                               <DialogContent className="background-primary-plat">
                                                   <DialogHeader>
                                                       <DialogTitle>Load Platinum User</DialogTitle>
                                                   </DialogHeader>
                                                   <LoadBalanceForm _id={admin._id} handleApi={putLoadAdminUser}/>
                                               </DialogContent>
                                           </Dialog>
                                       </TableCell>
                                       <TableCell>{admin.username}</TableCell>
                                       <TableCell>{format(admin.balance)}</TableCell>
                                       <TableCell>{admin.firstName} {admin.lastName}</TableCell>
                                       <TableCell>{admin.location}</TableCell>
                                       <TableCell>{admin.mobileNumber}</TableCell>
                                   </TableRow>
                               ))}
                           </TableBody>
                       </Table>
                   </TabsContent>
                   <TabsContent value="plat-users" className="border mx-4">
                       <Table >
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
                               {platUsers.map((platUser: UserProps, index) => (
                                   <TableRow key={index}>
                                       <TableCell>
                                           <Dialog>
                                               <DialogTrigger className="btn-primary-admin border-2 border-black px-4 py-1 rounded-md text-[8px] text-black font-extrabold">
                                                   Load
                                               </DialogTrigger>
                                               <DialogContent className="background-primary-plat">
                                                   <DialogHeader>
                                                       <DialogTitle>Load Platinum User</DialogTitle>
                                                   </DialogHeader>
                                                   <LoadBalanceForm _id={platUser._id} handleApi={putLoadPlatinumUser}/>
                                               </DialogContent>
                                           </Dialog>
                                       </TableCell>
                                       <TableCell>{platUser.username}</TableCell>
                                       <TableCell>{format(platUser.balance)}</TableCell>
                                       <TableCell>{platUser.firstName} {platUser.lastName}</TableCell>
                                       <TableCell>{platUser.location}</TableCell>
                                       <TableCell>{platUser.mobileNumber}</TableCell>
                                   </TableRow>
                               ))}
                           </TableBody>
                           {/*<TableCaption>A list of your recent invoices.</TableCaption>*/}
                       </Table>
                   </TabsContent>
               </Tabs>
           </div>
        </div>
    )
}

export default AdminDashboardPage