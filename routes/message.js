const express = require("express");
const router = express.Router();
const Message = require("../models/message.model");

// create messages
router.post("/createmessages", (req, res) => {
  const newMessage = new Message({
    senderInfo: req.body.senderInfo,
    receiverInfo: req.body.receiverInfo,
    messages: req.body.message,
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
