import mongoose from "mongoose";
import { Schema } from "mongoose";

const ResponseSchema=new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    message:{type:String,required:true},
},{timestamps:true})
mongoose.models={}
export default mongoose.model("response",ResponseSchema)