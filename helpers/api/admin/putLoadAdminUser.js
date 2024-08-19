import axios from "axios";

const putLoadAdminUser = async (user) => {
    return await axios.put("/api/UserAdmin/putLoadUserAdmin", user);
}


export default putLoadAdminUser;