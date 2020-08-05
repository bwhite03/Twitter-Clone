const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  senderInfo: {},
  receiverInfo: {},
  messages: [],
});

module.exports = mongoose.model("Message", MessageSchema);
