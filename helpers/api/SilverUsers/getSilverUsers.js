import axios from "axios";

const getSilverUsers = async () => {
    return await axios.get("/api/User/getSilverUsers");
}

export default getSilverUsers;