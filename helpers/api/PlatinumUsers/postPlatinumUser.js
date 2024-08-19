import axios from "axios";

const postPlatinumUser = async (user) => {
    return await axios.post("/api/User/createPlatinumUser", user);
    // return await axios.post("/platinum-agent/signup/[id]/api", user);
}


export default postPlatinumUser;