const router=require("express").Router();

var todoController=require("../Controllers/TodoControllers");

router.get("/",todoController.getAllTodo);
router.post("/",todoController.postOneTodo);
router.delete("/:id",todoController.deleteTodo);
router.put("/:id",todoController.updateTodo);
router.get("/:userId",todoController.getAllUSerTodo);
router.delete("/",todoController.deletAllTodo);




module.exports=router;