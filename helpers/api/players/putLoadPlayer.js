import axios from "axios";

const postSilverUser = async (user) => {
    return await axios.put("/api/User/putLoadPlayer", user);
}


export default postSilverUser;