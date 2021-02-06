const express = require("express");
const router = express.Router();
const Tweet = require("../models/tweet.model");
const User = require("../models/users.model");

// post tweet
router.post("/tweet", (req, res) => {
  const newTweet = new Tweet({
    content: req.body.content,
    username: req.body.username,
    profileImg: req.body.profileImg,
    userid: req.body.userid,
    dateCreated: req.body.dateCreated,
    retweetContent: req.body.retweetContent,
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
  Tweet.find({})
    .sort({ dateCreated: -1 })
    .exec((err, tweets) => {
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
    id: req.body.id,
  });

  Tweet.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { comments: newComment } },
    { new: true, runValidators: true }
  ).catch((err) => {
    console.error(err);
  });

  // send notification to user who tweeted
  User.findOneAndUpdate(
    { _id: req.body.userid },
    {
      $push: {
        notifications: req.body.notification,
      },
    },
    { new: true, runValidators: true }
  ).catch((err) => {
    console.error(err);
  });

  res.end();
});

// update user likes
router.put("/updatelikes/:id", (req, res) => {
  Tweet.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { likes: req.body.user } },
    { new: true, runValidators: true }
  ).catch((err) => {
    console.error(err);
  });
  res.end();
});

// update user unlikes
router.put("/updateunlikes/:id", (req, res) => {
  Tweet.findOneAndUpdate(
    { _id: req.params.id },
    { $pull: { likes: req.body.user } },
    { new: true, runValidators: true }
  ).catch((err) => {
    console.error(err);
  });
  res.end();
});

// update retweet count
router.put("/updateretweet/:id", (req, res) => {
  Tweet.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { retweets: req.body.user } },
    { new: true, runValidators: true }
  ).catch((err) => {
    console.error(err);
  });
  res.end();
});

router.delete("/deletetweet/:id", (req, res) => {
  Tweet.deleteOne(
    { _id: req.params.id },
    { new: true, runValidators: true }
  ).catch((err) => {
    console.error(err);
  });
  res.end();
});

module.exports = router;
