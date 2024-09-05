import mongoose from "mongoose";

const RequestPlayerSchema = new mongoose.Schema({
    from: {type: mongoose.Schema.Types.ObjectId, ref: "player"},
    to: {type: mongoose.Schema.Types.ObjectId, ref: "silverAgent"},
    type: {type: String},
    amount: {type: Number},
    remarks: {type: String},
    status: {type: String},
});

const RequestPlayer = mongoose.models.requestPlayer || mongoose.model("requestPlayer", RequestPlayerSchema)

export default RequestPlayer