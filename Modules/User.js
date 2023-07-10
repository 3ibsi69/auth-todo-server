const mongoose=require("./Connection");

const User=mongoose.model("User",{
    username: String,
    email: String,
    password: String,
    role:{
        type:String,
        default:"user",
        enum:["admin", "user"]
    }

})

module.exports=User;