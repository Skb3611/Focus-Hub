import mongoose from "mongoose";
import { Schema } from "mongoose";

const CoursesSchema=new Schema({
    title:String,
    coverImg:String,
    courses:Array
})
mongoose.models={}
export default mongoose.model("Courses",CoursesSchema)