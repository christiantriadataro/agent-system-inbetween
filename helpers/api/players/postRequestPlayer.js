import axios from "axios";

const postPlayer = async (user) => {
    return await axios.post("/api/User/createRequestPlayer", user);
}


export default postPlayer;