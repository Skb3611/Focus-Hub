import mongoose from 'mongoose';
const { Schema } = mongoose;

const EnquirySchema=new Schema({
    name:{type:String, required:true},
    email:{type:String, required:true},
    phone:{type:String||Number, required:true},
    category:{type:String||Number, required:true},
    date:{type:String||Number, required:true},
    time:{type:String||Number, required:true},
},{timestamps:true})
mongoose.models={}
export default mongoose.model("enquiry",EnquirySchema)