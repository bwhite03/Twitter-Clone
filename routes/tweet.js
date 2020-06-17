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

// add comments to tweet
router.put("/comment/:id", (req, res) => {
  const newComment = new Tweet({
    content: req.body.content,
    username: req.body.username,
    profileImg: req.body.profileImg,
    userid: req.body.userid,
    dateCreated: req.body.dateCreated,
  });

  Tweet.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { comments: newComment } },
    { new: true, runValidators: true }
  ).catch((err) => {
    console.error(err);
  });
  res.end();
});

module.exports = router;
