const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
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
  following: [{}],
  followers: [{}],
});

module.exports = mongoose.model("User", UserSchema);
