import mongoose,{Schema} from "mongoose";

const PaymentSchema = new Schema({
    oid:{type:String,required:true},
    email:{type:String,required:true},
    user:{type:String,required:true},
    amount:{type:String,required:true},
    category:{type:String,required:true},
    CourseName:{type:String,required:true},
    receipt:{type:String,required:true},
    status:{type:Boolean,default:false}

},{timestamps:true})
mongoose.models={}
export default mongoose.model("payment",PaymentSchema)