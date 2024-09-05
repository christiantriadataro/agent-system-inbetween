import axios from "axios";

const getPlayerRequests = async () => {
    return await axios.get("/api/User/getPlayerRequests");
}

export default getPlayerRequests;