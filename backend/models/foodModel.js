import mongoose, { mongo } from "mongoose";

const foodSchema= new mongoose.Schema({
  name: {type:String, required:true},
  description: {type:String,required:true},
  price:{type:Number,required:true},
  image:{type:String,required:true},
  category:{type:String,required:true}
})

const foodModel = mongoose.models.food || mongoose.model("food",foodSchema); // Here the Logical Or is used for the if the database is already exist then not create the another or if not create then only create.

export default foodModel;
