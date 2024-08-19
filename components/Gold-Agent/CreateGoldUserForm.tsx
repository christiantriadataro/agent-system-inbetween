import InputwithLabel from "@/components/InputwithLabel";
import CustomInputGroup from "@/components/CustomInputGroup";
import {ChangeEvent, useState} from "react";
import CustomButton from "@/components/CustomButton";
import {DialogClose} from "@/components/ui/dialog";
import postGoldUser from "@/helpers/api/GoldUsers/postGoldUser";



const CreateGoldUserForm = () => {
    const [newGoldUser, setNewGoldUser] = useState({
        username: "",
        password: "",
        balance: 0,
        firstName: "",
        lastName: "",
        location: "",
        mobileNumber: "",
    })
    const [confirmPassword, setConfirmPassword] = useState("")
    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => setNewGoldUser({...newGoldUser, username: event.target.value})
    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => setNewGoldUser({...newGoldUser, password: event.target.value})
    const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => setNewGoldUser({...newGoldUser, firstName: event.target.value})
    const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => setNewGoldUser({...newGoldUser, lastName: event.target.value})
    const handleLocationChange = (event: ChangeEvent<HTMLInputElement>) => setNewGoldUser({...newGoldUser, location: event.target.value})
    const handleMobileNumberChange = (event: ChangeEvent<HTMLInputElement>) => setNewGoldUser({...newGoldUser, mobileNumber: event.target.value})
    const handleConfirmPasswordChange = (event: ChangeEvent<HTMLInputElement>) => setConfirmPassword(event.target.value)

    const handleSubmit = async () => {
        try {
            const response = await postGoldUser(newGoldUser)
            console.log("New Gold Agent Created", response.data);
        } catch (error: any) {
            console.log("Failed to Create a Gold Agent", error.message);
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
               <CustomButton variant="gold" text="Confirm" />
           </div>
        </form>
    )
}

export default CreateGoldUserForm;