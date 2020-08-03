const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
  profileImg: {
    type: String,
    default: "",
  },
  profileBackground: {
    type: String,
    default: "",
  },
  location: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "",
  },
  notifications: [],
  messages: [],
  following: [],
  followers: [],
});

module.exports = mongoose.model("User", UserSchema);
