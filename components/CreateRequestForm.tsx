import InputwithLabel from "@/components/InputwithLabel";
import CustomInputGroup from "@/components/CustomInputGroup";
import {ChangeEvent, FormEvent, useState} from "react";
import CustomButton from "@/components/CustomButton";
import {DialogClose} from "@/components/ui/dialog";
import SelectwithLabel from "@/components/SelectwithLabel";
import postRequestPlayer from "@/helpers/api/players/postRequestPlayer";

const options = [
    {name: "Load", value: "load"},
    {name: "Withdraw", value: "withdraw"}
]

interface RequestFormProps {
    variant: string,
    userDetails: {
        _id: string,
        parent: string,
        balance: number,
        username: string
    }
}

const CreateRequestForm = ({userDetails, variant}: RequestFormProps) => {
    const [requestForm, setRequestForm] = useState({
        from: userDetails._id,
        to: userDetails.parent,
        type: "",
        amount: "",
        remarks: ""
    })
    const handleFromChange = (event: ChangeEvent<HTMLInputElement>) => setRequestForm({
        ...requestForm,
        from: event.target.value
    })
    const handleToChange = (event: ChangeEvent<HTMLInputElement>) => setRequestForm({
        ...requestForm,
        to: event.target.value
    })
    const handleTypeChange = (event: ChangeEvent<HTMLSelectElement>) => setRequestForm({
        ...requestForm,
        type: event.target.value
    })
    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => setRequestForm({
        ...requestForm,
        amount: event.target.value
    })
    const handleRemarksChange = (event: ChangeEvent<HTMLInputElement>) => setRequestForm({
        ...requestForm,
        remarks: event.target.value
    })

    const handleSubmit = async (event: FormEvent) => {
        try {
            const response = await postRequestPlayer(requestForm)
            // console.log("Request Form Created", response.data);
            console.log(requestForm)
        } catch (error: any) {
            console.log("Failed to Create a Request Form", error.message);
        }
    }

    const handleClick = () => {

    }

    return (
        <form onSubmit={handleSubmit}>
            <CustomInputGroup>
                <InputwithLabel label="From" handleDataChange={handleFromChange} disabled={true}
                                value={userDetails.username}/>
                <InputwithLabel label="To" handleDataChange={handleToChange} disabled={true}
                                value={userDetails.parent}/>
            </CustomInputGroup>
            <SelectwithLabel label="Type" values={options} handleDataChange={handleTypeChange}/>
            <InputwithLabel label="Amount" text="number" handleDataChange={handleAmountChange}/>
            <InputwithLabel label="Remarks" handleDataChange={handleRemarksChange}/>
            <div className="flex justify-center items-center gap-8 mt-5">
                <DialogClose asChild>
                    <CustomButton variant="cancel" text="Cancel" aria-label="Close"/>
                </DialogClose>
                <CustomButton variant={variant} text="Confirm"/>
            </div>
        </form>
    )
}

export default CreateRequestForm;