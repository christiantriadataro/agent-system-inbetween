import mongoose from "mongoose";
import UserAdmin from "@/models/UserAdminDTO.js";

const silverUserSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    location: { type: String },
    mobileNumber: { type: String },
    balance: { type: Number },
    users: [{type: mongoose.Schema.Types.ObjectId, ref: "player"}],
    parent: {type: mongoose.Schema.Types.ObjectId, ref: "goldUser"}
})

const SilverUser = mongoose.models.silverUser || mongoose.model("silverUser", silverUserSchema )

export default SilverUser