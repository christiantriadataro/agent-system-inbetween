import axios from "axios";

const postSilverUser = async (user) => {
    return await axios.post("/api/User/createSilverUser", user);
}


export default postSilverUser;