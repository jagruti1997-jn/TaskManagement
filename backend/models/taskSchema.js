const mongoose=require("mongoose");
const Schema=mongoose.Schema;

const taskSchema=mongoose.Schema({
    task:{ type:String, required:true  },
    
    user:{type:Schema.Types.ObjectId,ref:"userSchema"}
},{timestamps:true})


module.exports=mongoose.model('task',taskSchema)