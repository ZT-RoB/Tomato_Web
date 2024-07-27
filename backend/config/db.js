import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://omgarje004:9535465520@cluster0.5cqx88x.mongodb.net/Tomato_Web').then(()=>console.log("DB Connected"));
}