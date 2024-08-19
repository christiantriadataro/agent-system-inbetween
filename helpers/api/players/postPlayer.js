import axios from "axios";

const postPlayer = async (user) => {
    return await axios.post("/api/User/createPlayer", user);
}


export default postPlayer;