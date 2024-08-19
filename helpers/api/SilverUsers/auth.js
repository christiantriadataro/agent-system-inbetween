import axios from "axios";

export const SilverLogin = async (username, password) => {
    return await axios.post("/api/User/loginSilverUser", {username, password});
}

