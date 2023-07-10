const router=require("express").Router();
const authpage=require("../Middlewares/authpage");
var UserController=require("../Controllers/UserControllers");



router.post("/signup",UserController.signup);
router.post("/login",UserController.login);
router.post("/verify",UserController.verify);
router.delete("/delete/",UserController.deleteAlluser);

router.put("/changeRole/:id",authpage("admin"),UserController.changeRole);


module.exports=router;