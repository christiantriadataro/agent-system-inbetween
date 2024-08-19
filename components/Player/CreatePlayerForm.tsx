import InputwithLabel from "@/components/InputwithLabel";
import CustomInputGroup from "@/components/CustomInputGroup";
import {ChangeEvent, useState} from "react";
import CustomButton from "@/components/CustomButton";
import {DialogClose} from "@/components/ui/dialog";
import postPlayer from "@/helpers/api/players/postPlayer";



const CreatePlayerForm = () => {
    const [newPlayer, setNewPlayer] = useState({
        username: "",
        password: "",
        balance: 0,
        firstName: "",
        lastName: "",
        location: "",
        mobileNumber: "",
    })
    const [confirmPassword, setConfirmPassword] = useState("")
    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => setNewPlayer({...newPlayer, username: event.target.value})
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => setNewPlayer({...newPlayer, password: event.target.value})
    const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => setNewPlayer({...newPlayer, firstName: event.target.value})
    const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => setNewPlayer({...newPlayer, lastName: event.target.value})
    const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => setNewPlayer({...newPlayer, location: event.target.value})
    const handleMobileNumberChange = (event: ChangeEvent<HTMLInputElement>) => setNewPlayer({...newPlayer, mobileNumber: event.target.value})
    const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => setConfirmPassword(event.target.value)

    const handleSubmit = async () => {
        try {
            const response = await postPlayer(newPlayer)
            console.log("New Player Created", response.data);
        } catch (error: any) {
            console.log("Failed to Create a Player", error.message);
        }
    }

    const handleClick = () => {

    }

    return (
        <form  onSubmit={handleSubmit}>
            <InputwithLabel label="Username" handleDataChange={handleUsernameChange}/>
            <CustomInputGroup>
                <InputwithLabel label="Password" handleDataChange={handlePasswordChange} text="password"/>
                <InputwithLabel label="Confirm Password" handleDataChange={handleConfirmPasswordChange} text="password" />
            </CustomInputGroup>
            <CustomInputGroup>
                <InputwithLabel label="First Name" handleDataChange={handleFirstNameChange}/>
                <InputwithLabel label="Last Name" handleDataChange={handleLastNameChange}/>
            </CustomInputGroup>
            <InputwithLabel label="Location" handleDataChange={handleLocationChange}/>
            <InputwithLabel label="Mobile Number" handleDataChange={handleMobileNumberChange}/>
           <div className="flex justify-center items-center gap-8 mt-5">
               <DialogClose asChild>
                   <CustomButton variant="cancel" text="Cancel" aria-label="Close" />
               </DialogClose>
               <CustomButton variant="silver" text="Confirm" />
           </div>
        </form>
    )
}

export default CreatePlayerForm;