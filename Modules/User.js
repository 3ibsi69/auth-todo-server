const mongoose=require("./Connection");

const User=mongoose.model("User",{
    username: String,
    email: String,
    password: String,

})

module.exports=User;