import mongoose from "mongoose";

export const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI!);
        const connection = mongoose.connection;
        connection.on("connected", () => console.log("Connected Successfully."))
        connection.on("error", (error) => console.log(error));
    } catch (error) {
        console.log(error)
    }
}