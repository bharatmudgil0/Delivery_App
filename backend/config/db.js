import mongoose from "mongoose";

export const connectDB = async () =>{
  await mongoose.connect('mongodb+srv://greatstack:123789@cluster0.kou3x.mongodb.net/food-del').then(()=>console.log("DB connected"));
}