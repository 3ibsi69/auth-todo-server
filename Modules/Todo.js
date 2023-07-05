const mongoose=require("./Connection");

const Todo=mongoose.model("Todo",{
    title:String,
    userId:String,
})


module.exports=Todo;