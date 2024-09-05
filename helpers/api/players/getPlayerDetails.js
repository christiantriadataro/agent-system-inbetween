import axios from "axios";

export const getPlayerDetails = async () => {
    return await axios.get("/api/User/getPlayerDetails");
}