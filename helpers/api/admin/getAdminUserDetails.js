import axios from "axios";

export const getAdminUserDetails = async () => {
    return await axios.get("/api/UserAdmin/getAdminUserDetails");
}