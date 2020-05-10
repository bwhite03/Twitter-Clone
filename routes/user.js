const express = require("express");
const router = express.Router();
const User = require("../models/users.model");

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

router.post("/user", (req, res) => {
  const newUser = new User();
  newUser.email = req.body.email;
  newUser.username = req.body.username;
  newUser.email = req.body.password;

  newUser.save((err, user) => {
    if (err) {
      console.log(err);
    } else {
      res.send(user);
    }
  });
});

module.exports = router;
