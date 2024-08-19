import axios from "axios";

export const getMyId = async () => {
    return await axios.get("/api/Me")
}

