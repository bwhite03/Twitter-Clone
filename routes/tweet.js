const express = require("express");
const router = express.Router();
const Tweet = require("../models/tweet.model");

// post tweet
router.post("/tweet", (req, res) => {
  const newTweet = new Tweet({
    content: req.body.content,
    username: req.body.username,
    profileImg: req.body.profileImg,
    userid: req.body.userid,
    dateCreated: req.body.dateCreated,
  });

  newTweet.save((err, tweet) => {
    if (err) {
      console.log(err);
    } else {
      res.end();
    }
  });
});

// get all tweets
router.get("/tweets", (req, res) => {
  Tweet.find({}).exec((err, tweets) => {
    if (err) {
      console.log(err);
    } else {
      res.json(tweets);
    }
  });
});

module.exports = router;
