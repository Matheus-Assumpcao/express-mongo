import mongoose from "mongoose";

async function conectaNaDataBase() {
    mongoose.connect("mongodb+srv://admin:bruce2024@cluster0.7x5ru.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0");
    return mongoose.connection;
};

export default conectaNaDataBase;


