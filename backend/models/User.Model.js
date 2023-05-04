
const mongoose=require('mongoose');

const userSchema=mongoose.Schema(
    {
        name:{type:String,required:true},
        email:{type:String,required:true},
        password:{type:String,required:true},
        mobile:{type:Number,required:true}
    },{
        versionKey:false
    }
)
const UserModel=mongoose.model("users",userSchema)
module.exports=UserModel