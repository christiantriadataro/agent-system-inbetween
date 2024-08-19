import mongoose from "mongoose";

const userAdminSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    location: { type: String },
    mobileNumber: { type: String },
    balance: { type: Number },
    users: [{type: mongoose.Schema.Types.ObjectId, ref: "platinumUser"}]
});

const UserAdmin = mongoose.models.userAdmin || mongoose.model("userAdmin", userAdminSchema)

export default UserAdmin