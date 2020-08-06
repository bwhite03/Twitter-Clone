const express = require("express");
const router = express.Router();
const Message = require("../models/message.model");

// get all messages
router.get("/messages", (req, res) => {
  Message.find({}).exec((err, messages) => {
    if (err) {
      console.log(err);
    } else {
      res.json(messages);
    }
  });
});

// create messages
router.post("/createmessages", (req, res) => {
  const newMessage = new Message({
    senderInfo: req.body.senderInfo,
    receiverInfo: req.body.receiverInfo,
    messages: {
      message: req.body.message.message,
      username: req.body.message.username,
      avatar: req.body.message.avatar,
      dateCreated: req.body.dateCreated,
    },
    //messages: req.body.message,
  });

  newMessage.save((err, tweet) => {
    if (err) {
      console.log(err);
    } else {
      res.end();
    }
  });
});

module.exports = router;
