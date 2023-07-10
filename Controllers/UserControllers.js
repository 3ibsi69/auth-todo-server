var User = require("../Modules/User");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  var checkUser = await User.findOne({ email: req.body.email });
  if (checkUser) {
    res.send({ msg: "email already exist" });
    return;
  }
  bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(req.body.password, salt, async (err, hash) => {
      var user = {
        email: req.body.email,
        username: req.body.username,
        password: hash,
        role: req.body.role,
      };
      var createdUser = await User.create(user);
      var token = jwt.sign({ id: createdUser._id }, "c21");
      res.send({ token });
    });
  });
};

const login = async (req, res) => {
  var user = await User.findOne({ email: req.body.email });
  if (user) {
    bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (result) {
        var token = jwt.sign({ id: user._id }, "c21");
        res.send({ token });
      } else {
        res.send({ msg: "wrong password" });
      }
    });
  } else {
    res.send("wrong email");
  }
};

const verify = async (req, res) => {
  if (!req.body.token) {
    res.send({ msg: false });
  }
  try {
    var payload = jwt.verify(req.body.token, "c21");
    if (payload) {
      var user = await User.findOne({ _id: payload.id });
      if (user) {
        var token = jwt.sign({ id: user._id }, "c21");
        res.send({ user });
      } else {
        res.send("invalid token 1");
      }
    } else {
      res.send("invalid token 2 ");
    }
  } catch (err) {
    console.log(err);
    res.send("invalid token 3");
  }
};
const deleteAlluser = async (req, res) => {
  await User.deleteMany();
  res.send({ msg: "deleted all" });
};

const changeRole = async (req, res) => {
  await User.updateOne({ _id: req.params.id }, { role: "user" });
  res.send({ msg: "updated" });
};


module.exports = {
  signup,
  login,
  verify,
  deleteAlluser,
  changeRole,
};
