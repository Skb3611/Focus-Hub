import mongoose,{Schema} from "mongoose";

const PaymentSchema = new Schema({
    user:{type:String,required:true},
    amount:{type:String,required:true},
    notes:Array,
    receipt:{type:String,required:true},
    status:{type:Boolean,default:false}

})
mongoose.models={}
export default mongoose.model("payment",PaymentSchema)