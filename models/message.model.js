const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  senderInfo: {},
  receiverInfo: {},
  messages: [
    {
      message: {
        type: String,
        required: true,
      },
      username: {
        type: String,
      },
      avatar: {
        type: String,
        default: "",
      },
      dateCreated: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model("Message", MessageSchema);
