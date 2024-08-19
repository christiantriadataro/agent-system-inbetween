import axios from "axios";

export const PlatLogin = async (username, password) => {
    return await axios.post("/api/User/loginPlatUser", {username, password});
}

