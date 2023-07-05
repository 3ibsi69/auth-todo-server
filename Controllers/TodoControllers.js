const Todo = require("../Modules/Todo");

const getAllTodo = async (req, res) => {
  var Todo = await Todo.find();
  res.send(Todo);
};

var postOneTodo = async (req, res) => {
  await Todo.create(req.body);
  res.send({ msg: "todo created" });
};

var deleteTodo = async (req, res) => {
  await Todo.deleteOne({ _id: req.params._id });
  res.send({ msg: "deleted" });
};
var updateTodo = async (req, res) => {
  await Todo.findByIdAndUpdate({ _id: req.params._id }, req.body);
  res.send({ msg: "updated" });
};

const getAllUSerTodo=async(req,res)=>{
    var Todo=await Todo.find({userId :req.params.userId});
    res.send(Todo);
}



module.exports = {
  getAllTodo,
  postOneTodo,
  deleteTodo,
  updateTodo,
  getAllUSerTodo,
};
