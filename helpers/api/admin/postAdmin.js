import axios from "axios";

const postAdmin = async (user) => {
    return await axios.post("/api/UserAdmin/createAdminUser", user);
}


export default postAdmin;