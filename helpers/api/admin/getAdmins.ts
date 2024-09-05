import {NextRequest, NextResponse} from "next/server";
import {connect} from "../../utils/databaseConfig.js";
import UserAdmin from "../../../models/UserAdminDTO.js";
import axios from "axios";

export const getAdmins = async () => {
    return await axios.get("/api/UserAdmin/getAdminUsers");
}