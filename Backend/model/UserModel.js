const mongoose= require("mongoose")

const UserSchema= new mongoose.Schema({
    username:{
        type:String ,
       
    },
    email:{
        type:String ,
        required:true,
        unique:true
    },
    password:{
        type:String ,
        required:true,
           
    },
    role:{
        type:String
    }
   
}, {timestamps:true})

module.exports= mongoose.model("User",UserSchema);