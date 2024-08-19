import axios from "axios";

export const getPlatinumUsers = async () => {
    return await axios.get("/api/User/getPlatinumUsers");
}