const mongoose = require("mongoose");

const TweetSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  username: {
    type: String,
  },
  userid: {
    type: String,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  profileImg: {
    type: String,
    default: "",
  },
  comments: [],
});

module.exports = mongoose.model("Tweet", TweetSchema);
