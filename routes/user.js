const express = require("express");
const router = express.Router();
const User = require("../models/users.model");

// Test Routes
router.get("/users", (req, res) => {
  User.find({}).exec((err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

module.exports = router;
