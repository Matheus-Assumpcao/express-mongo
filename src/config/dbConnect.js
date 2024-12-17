import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

async function conectaNaDataBase() {
    mongoose.connect(process.env.MONGODB_URL);
    return mongoose.connection;
}

export default conectaNaDataBase;