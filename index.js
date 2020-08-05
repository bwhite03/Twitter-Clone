const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const UserRoute = require("./routes/user");
const TweetRoute = require("./routes/tweet");
const MessageRoute = require("./routes/message");

dotenv.config();

// Middleware
app.use(express.static("client/build"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(UserRoute);
app.use(TweetRoute);
app.use(MessageRoute);

// Connect database
mongoose.connect(process.env.DB_CONNECT, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on ${PORT}`));
