const express = require("express");
const router = express.Router();
const User = require("../models/users.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { registerValidation, signinValidation } = require("../validation");
const auth = require("./verifyToken");

// get all users
router.get("/users", (req, res) => {
  User.find({}).exec((err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

// get single user
router.get("/users/:id", (req, res) => {
  User.findOne({ _id: req.params.id }).exec((err, user) => {
    if (err) {
      console.log(err);
    } else {
      res.json(user);
    }
  });
});

// get signedin user
router.get("/signedin", auth, (req, res) => {
  User.findOne({ _id: req.user }).exec((err, user) => {
    if (err) {
      console.log(err);
    } else {
      res.json(user);
    }
  });
});

// sign up
router.post("/signup", async (req, res) => {
  // validate
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if email exists
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("Email already exists");

  // hash password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    email: req.body.email,
    username: req.body.username,
    password: hashPassword,
  });

  newUser.save((err, user) => {
    if (err) {
      console.log(err);
    } else {
      res.send(user);
    }
  });
});

//signin
router.post("/signin", async (req, res) => {
  // validate
  const { error } = signinValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  // check if email exists
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email is not found");

  // password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("Invalid password");

  // create and assign token
  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header("auth-token", token).send(token);
});

module.exports = router;
