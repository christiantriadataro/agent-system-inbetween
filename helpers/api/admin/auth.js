import axios from "axios";

export const AdminLogin = async (username, password) => {
    return await axios.post("/api/UserAdmin/loginAdminUser", {username, password});
}

export const AdminLogout = async () => {
    return await axios.get("/api/UserAdmin/logoutAdminUser")
}

