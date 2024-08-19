import axios from "axios";

export const getGoldUserDetails = async () => {
    return await axios.get("/api/User/getGoldUserDetails");
}