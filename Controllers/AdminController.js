var User = require("../Modules/User");
var authpage = require("../Middlewares/authpage");

const changeRole = async (req, res) => {
    var user=await User.findOne({_id:req.params.id});
    if(user.role=="admin"){
  await User.updateOne({ _id: req.body.id }, { role: req.body.role });
  res.send({ msg: "updated" });
};
}
const getalluser = async (req, res) => {
    var user = await User.find({_id:req.params.id});
    if(user){
        var alluser = await User.find();
        res.send({ alluser });
    }
    else{
        res.send({msg:"you are not authorized"})
    }

};
const deleteUser=async(req,res)=>{
    var user=await User.findOne({_id:req.params.id});
    if(user.role=="admin"){
        await User.deleteOne({_id:req.body.id});
        res.send({msg:"deleted"})
    }
    else{
        res.send({msg:"you are not authorized"})
    }
}


const deleteAlluser = async (req, res) => {
  await User.deleteMany();
  res.send({ msg: "deleted" });
};

module.exports = { 
    changeRole,
     getalluser,
        deleteUser,
     deleteAlluser, 
    };
