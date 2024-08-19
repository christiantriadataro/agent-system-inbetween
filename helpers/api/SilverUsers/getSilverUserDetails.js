import axios from "axios";

export const getSilverUserDetails = async () => {
    return await axios.get("/api/User/getSilverUserDetails");
}