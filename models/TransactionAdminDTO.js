import mongoose from "mongoose";

const RequestAdminSchema = new mongoose.Schema({
    from: {type: mongoose.Schema.Types.ObjectId, ref: "Admin"},
    to: {type: mongoose.Schema.Types.ObjectId, ref: "platinumUser"},
    type: { type: String },
    amount: { type: Number },
    remarks: { type: String },
});

const RequestAdmin = mongoose.models.requestAdmin || mongoose.model("requestAdmin", RequestAdminSchema)

export default RequestAdmin