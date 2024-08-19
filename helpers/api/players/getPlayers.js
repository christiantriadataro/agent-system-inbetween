import axios from "axios";

const getPlayers = async () => {
    return await axios.get("/api/User/getPlayers");
}

export default getPlayers;