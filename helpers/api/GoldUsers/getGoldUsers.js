import axios from "axios";

const getGoldUsers = async () => {
    return await axios.get("/api/User/getGoldUsers");
}

export default getGoldUsers;