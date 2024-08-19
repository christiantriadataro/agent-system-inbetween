import axios from "axios";

export const getPlatinumUserDetails = async () => {
    return await axios.get("/api/User/getPlatinumUserDetails");
}