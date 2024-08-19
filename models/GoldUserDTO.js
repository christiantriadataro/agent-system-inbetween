import mongoose from "mongoose";
import UserAdmin from "@/models/UserAdminDTO.js";

const goldUserSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    location: { type: String },
    mobileNumber: { type: String },
    balance: { type: Number },
    users: [{type: mongoose.Schema.Types.ObjectId, ref: "silverUser"}],
    parent: {type: mongoose.Schema.Types.ObjectId, ref: "platinumUser"}
})

const GoldUser = mongoose.models.goldUser || mongoose.model("goldUser", goldUserSchema )

export default GoldUser