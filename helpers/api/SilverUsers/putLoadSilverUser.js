import axios from "axios";

const postSilverUser = async (user) => {
    return await axios.put("/api/User/putLoadSilverUser", user);
}


export default postSilverUser;