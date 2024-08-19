import axios from "axios";

export const GoldLogin = async (username, password) => {
    return await axios.post("/api/User/loginGoldUser", {username, password});
}

