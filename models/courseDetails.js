import mongoose from "mongoose";
import { Schema } from "mongoose";
const courseDetails=new Schema({
    coverImg:String,
    title:String,
    info:String,
    features:Array,
    Benefits:Array,
    Syllabus:Array,
})
mongoose.models={}
export default mongoose.model("courseDetails",courseDetails)