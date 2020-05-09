const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const UserRoute = require("./routes/user");

// Middleware
app.use(express.static("client/build"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(UserRoute);

// Connect database
mongoose.connect(
  "mongodb+srv://Blake:Lacey1195@cluster0-jnt6h.mongodb.net/TwitterClone?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
