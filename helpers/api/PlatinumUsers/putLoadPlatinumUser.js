import axios from "axios";

const postPlatinumUser = async (user) => {
    return await axios.put("/api/User/putLoadPlatinumUser", user);
}


export default postPlatinumUser;