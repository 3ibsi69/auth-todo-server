var User = require("../Modules/User");
const Todo = require("../Modules/Todo");
var authpage = require("../Middlewares/authpage");

const changeRole = async (req, res) => {
  await User.updateOne({ _id: req.body.id }, { role: req.body.role });
  res.send({ msg: "updated" });
};
const getalluser = async (req, res) => {
  var alluser = await User.find();
  res.send({ alluser });
};
const deleteUser = async (req, res) => {
  await User.deleteOne({ _id: req.body.id });
  res.send({ msg: "deleted" });
};

const deleteAlluser = async (req, res) => {
  await User.deleteMany();
  res.send({ msg: "deleted" });
};

const seeTodo = async (req, res) => {
  var todos = await Todo.find({ userId: req.body.userId });
  res.send(todos);
};

module.exports = {
  changeRole,
  getalluser,
  deleteUser,
  deleteAlluser,
  seeTodo,
};
