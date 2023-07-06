const Todo = require("../Modules/Todo");

const getAllTodo = async (req, res) => {
  var todos = await Todo.find();
  res.send(todos);
};

var postOneTodo = async (req, res) => {
  await Todo.create(req.body);
  res.send({ msg: "todo created" });
};

var deleteTodo = async (req, res) => {
  await Todo.deleteOne({ _id: req.params.id });
  res.send({ msg: "deleted" });
};
var updateTodo = async (req, res) => {
  await Todo.updateOne({ _id: req.params.id }, req.body );
  res.send({ msg: "updated" });
};
const getAllUSerTodo=async(req,res)=>{
    var usertodos=await Todo.find({userId :req.params.userId});
    res.send(usertodos);
}

const deletAllTodo=async(req,res)=>{
    await Todo.deleteMany();
    res.send({msg:"deleted all"});
}


module.exports = {
  getAllTodo,
  postOneTodo,
  deleteTodo,
  updateTodo,
  getAllUSerTodo,
  deletAllTodo,
};
