import InputwithLabel from "@/components/InputwithLabel";
import {ChangeEvent, useLayoutEffect, useState} from "react";
import CustomButton from "@/components/CustomButton";


const LoadBalanceForm = ({variant, parentId, _id, handleApi}: {
    variant: string,
    parentId: string,
    _id: string,
    handleApi: any
}) => {
    const [loadUser, setLoadUser] = useState({
        _id: "",
        balance: 0,
        parent: ""
    })
    const handleBalanceChange = (event: ChangeEvent<HTMLInputElement>) => setLoadUser({
        ...loadUser,
        balance: parseInt(event.target.value)
    })
    console.log(loadUser)

    useLayoutEffect(() => {
        if (loadUser._id === "") {
            setLoadUser({_id, balance: 0, parent: parentId})
        } else {
            return;
        }
    }, []);


    const handleSubmit = async () => {
        try {
            console.log(loadUser);
            const response = await handleApi(loadUser)
        } catch (error: any) {
            console.log("Failed to Create a Plat Agent", error.message);
        }
        console.log("loadUSer Loadbalanceform", loadUser)
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputwithLabel label="Add Balance" handleDataChange={handleBalanceChange}
                            value={String(loadUser.balance)}/>
            <div className="flex justify-center items-center gap-8 mt-5">
                <CustomButton variant={variant} text="Confirm"/>
            </div>
        </form>
    )
}

export default LoadBalanceForm;