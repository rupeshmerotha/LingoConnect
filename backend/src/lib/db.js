import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "lingoconnect"
        })
        console.log("Database connected successfully");
        
    } catch (error) {
        console.log(error.message);
    }
}