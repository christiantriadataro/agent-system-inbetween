import InputwithLabel from "@/components/InputwithLabel";
import CustomInputGroup from "@/components/CustomInputGroup";
import {ChangeEvent, useEffect, useLayoutEffect, useState} from "react";
import CustomButton from "@/components/CustomButton";
import postPlatinumUser from "@/helpers/api/PlatinumUsers/postPlatinumUser";
import putLoadPlatinumUser from "@/helpers/api/PlatinumUsers/putLoadPlatinumUser";
import putLoadAdminUser from "@/helpers/api/admin/putLoadAdminUser";
import {AxiosResponse} from "axios";



const LoadBalanceForm = ({_id, handleApi}: {_id: string, handleApi: any}) => {
    const [loadUser, setLoadUser] = useState({
        _id: "",
        balance: 0
    })
    const handleBalanceChange = (event: ChangeEvent<HTMLInputElement>) => setLoadUser({...loadUser, balance: parseInt(event.target.value)})
    console.log(loadUser)

    useLayoutEffect(() => {
        if (loadUser._id === "") {
            setLoadUser({_id, balance: 0})
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
        <form  onSubmit={handleSubmit}>
            <InputwithLabel label="Add Balance" handleDataChange={handleBalanceChange} value={loadUser.balance} />
            <div className="flex justify-center items-center gap-8 mt-5">
                {/*<button*/}
                {/*        className={`btn-primary-cancel border-2 border-black px-9 py-2 rounded-md text-xs text-black font-semibold`}>*/}
                {/*    Cancel*/}
                {/*</button>*/}
                <CustomButton variant="plat" text="Confirm"/>
            </div>
        </form>
    )
}

export default LoadBalanceForm;