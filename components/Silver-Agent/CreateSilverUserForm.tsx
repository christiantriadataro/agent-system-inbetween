import InputwithLabel from "@/components/InputwithLabel";
import CustomInputGroup from "@/components/CustomInputGroup";
import {ChangeEvent, useState} from "react";
import CustomButton from "@/components/CustomButton";
import {DialogClose} from "@/components/ui/dialog";
import postSilverUser from "@/helpers/api/SilverUsers/postSilverUser";



const CreateSilverUserForm = () => {
    const [newSilverUser, setNewSilverUser] = useState({
        username: "",
        password: "",
        balance: 0,
        firstName: "",
        lastName: "",
        location: "",
        mobileNumber: "",
    })
    const [confirmPassword, setConfirmPassword] = useState("")
    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => setNewSilverUser({...newSilverUser, username: event.target.value})
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => setNewSilverUser({...newSilverUser, password: event.target.value})
    const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => setNewSilverUser({...newSilverUser, firstName: event.target.value})
    const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => setNewSilverUser({...newSilverUser, lastName: event.target.value})
    const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => setNewSilverUser({...newSilverUser, location: event.target.value})
    const handleMobileNumberChange = (event: ChangeEvent<HTMLInputElement>) => setNewSilverUser({...newSilverUser, mobileNumber: event.target.value})
    const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => setConfirmPassword(event.target.value)

    const handleSubmit = async () => {
        try {
            const response = await postSilverUser(newSilverUser)
            console.log("New Silver Agent Created", response.data);
        } catch (error: any) {
            console.log("Failed to Create a Silver Agent", error.message);
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

export default CreateSilverUserForm;