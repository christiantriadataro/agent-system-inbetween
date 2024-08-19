import axios from "axios";

const postGoldUser = async (user) => {
    return await axios.post("/api/User/createGoldUser", user);
}


export default postGoldUser;