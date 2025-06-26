import mongoose from "mongoose";
import 'dotenv/config';

const connectDB = async () => {
    try {
        mongoose.connection.on('Connected', () => {
            console.log("Database Connected");
        })
        await mongoose.connect(`mongodb+srv://aasheetagajera03:IMItv4i5pF6DUsKs@diamora.5iex0hr.mongodb.net/?retryWrites=true&w=majority&appName=Diamora`);
    } catch (error) {
        console.log("❌ MongoDB Connection Failed");
    }
    console.log("✅ MongoDB Connected");

    // await mongoose.connect("mongodb+srv://aiGenerateImages:poiuytrewq@cluster0.zapn6.mongodb.net/AiImages")
}

export default connectDB;