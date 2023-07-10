
const authpage=(role)=>{
    return (req,res,next)=>{
        if(req.user.role==role){
            next();
        }else{
            res.send({msg:"you are not admin"})
        }
    }
}
module.exports=authpage;