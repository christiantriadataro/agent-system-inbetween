import mongoose from "mongoose";
import UserAdmin from "@/models/UserAdminDTO.js";

const platinumUserSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    location: { type: String },
    mobileNumber: { type: String },
    balance: { type: Number },
    users: [{type: mongoose.Schema.Types.ObjectId, ref: "goldUser"}],
    parent: {type: mongoose.Schema.Types.ObjectId, ref: "userAdmin"}
})

const PlatinumUser = mongoose.models.platinumUser || mongoose.model("platinumUser", platinumUserSchema )

export default PlatinumUser