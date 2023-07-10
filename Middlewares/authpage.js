const User=require('../Modules/User');

const authpage=(role)=>{
    return async (req,res,next)=>{

try{
        const userId=req.params.id;
        const user=await User.findOne({_id:userId});
        if(user.role==role){
            next();
        }else{
            res.send({msg:"you are not authorized"})
        }
    }catch(err){
    res.send({msg:"you are not authorized"})
}
    }

}
module.exports=authpage;