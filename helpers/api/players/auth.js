import axios from "axios";

export const PlayerLogin = async (username, password) => {
    return await axios.post("/api/User/loginPlayer", {username, password});
}

