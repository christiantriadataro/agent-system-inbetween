import axios from "axios";

const postLoadGoldUser = async (user) => {
    return await axios.put("/api/User/putLoadGoldUser", user);
}


export default postLoadGoldUser;