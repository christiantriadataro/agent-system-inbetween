import mongoose from "mongoose";

const playerSchema = new mongoose.Schema({
    username: { type: String },
    password: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    location: { type: String },
    mobileNumber: { type: String },
    balance: { type: Number },
    parent: {type: mongoose.Schema.Types.ObjectId, ref: "silverUser"}
})

const Player = mongoose.models.player || mongoose.model("player", playerSchema )

export default Player