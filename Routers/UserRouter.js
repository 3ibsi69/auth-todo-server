const router=require("express").Router();

var UserController=require("../Controllers/UserControllers");



router.post("/signup",UserController.signup);
router.post("/login",UserController.login);
router.post("/verify",UserController.verify);



module.exports=router;