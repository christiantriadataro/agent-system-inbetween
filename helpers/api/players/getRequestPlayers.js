import axios from "axios";

const getRequestPlayers = async () => {
    return await axios.get("/api/User/getRequestPlayers");
}

export default getRequestPlayers;