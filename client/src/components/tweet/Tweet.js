import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import RetweetDialog from "../util/retweet-dialog/RetweetDialog";
import { Link } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import {
  updateLikes,
  updateUnlikes,
  tweet,
  updateRetweet,
} from "../../store/actions/tweetActions";
import "./tweet.styles.scss";

function Tweet(props) {
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const id = {
    tweetId: props.tweets._id,
    userId: props.userInfo._id,
  };

  const data = {
    content: content,
    username: props.userInfo.username,
    profileImg: props.userInfo.profileImg,
    userid: props.userInfo._id,
    comments: [],
    likes: [],
    retweetContent: props.tweets,
    retweets: [],
  };

  const submitRetweet = () => {
    props.updateRetweet(id);
    props.tweet(data);
    setContent("");
    setOpen(false);
  };

  return (
    <Card variant="outlined" id="tweet-container">
      <div className="containerr">
        <div className="avatar">
          {props.tweets.profileImg ? (
            <Avatar src={props.tweets.profileImg} alt="userimg" sizes={"lg"} />
          ) : (
            <Avatar alt="userimg" sizes={"lg"}>
              {props.tweets.username.charAt(0).toUpperCase()}
            </Avatar>
          )}
        </div>
        <div style={{ width: "100%" }}>
          <div className="info-container">
            <Link to={props.tweets.userid}>
              <p className="username">{props.tweets.username}</p>
            </Link>
            <p className="date">
              {moment(props.tweets.dateCreated).calendar()}
            </p>
          </div>
          <div className="content-container">
            <p>{props.tweets.content}</p>
          </div>
          {props.tweets.retweetContent !== undefined && (
            <div className="retweet-container">
              <div className="avatar">
                {props.tweets.retweetContent.profileImg ? (
                  <Avatar
                    src={props.tweets.retweetContent.profileImg}
                    alt="userimg"
                    sizes={"lg"}
                  />
                ) : (
                  <Avatar alt="userimg" sizes={"lg"}>
                    {props.tweets.retweetContent.username
                      .charAt(0)
                      .toUpperCase()}
                  </Avatar>
                )}
              </div>
              <div style={{ width: "100%" }}>
                <div className="info-container">
                  <Link to={props.tweets.retweetContent.userid}>
                    <p className="username">
                      {props.tweets.retweetContent.username}
                    </p>
                  </Link>
                  <p className="date">
                    {moment(props.tweets.retweetContent.dateCreated).calendar()}
                  </p>
                </div>
                <div className="content-container">
                  <p>{props.tweets.retweetContent.content}</p>
                </div>
              </div>
            </div>
          )}
          <div className="icons">
            <Link to={`comment/${props.tweets._id}`}>
              <div className="comment-icon">
                <ChatBubbleOutlineOutlinedIcon />{" "}
                <p>{props.tweets.comments.length}</p>
              </div>
            </Link>
            <div className="retweet-icon" onClick={handleClickOpen}>
              <RepeatOutlinedIcon />
              <p>{props.tweets.retweets.length}</p>
            </div>
            {props.tweets.likes.includes(props.userInfo._id) ? (
              <div
                style={{ color: "pink" }}
                className="heart-icon"
                onClick={props.updateUnlikes.bind(null, id)}
              >
                <FavoriteBorderOutlinedIcon />{" "}
                <p>{props.tweets.likes.length}</p>
              </div>
            ) : (
              <div
                className="heart-icon"
                onClick={props.updateLikes.bind(null, id)}
              >
                <FavoriteBorderOutlinedIcon />{" "}
                <p>{props.tweets.likes.length}</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <RetweetDialog
        handleClickOpen={handleClickOpen}
        handleClose={handleClose}
        setContent={setContent}
        open={open}
        tweet={props.tweets}
        submitRetweet={submitRetweet}
        content={content}
      />
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.userInfo,
  };
};

export default connect(mapStateToProps, {
  updateLikes,
  updateUnlikes,
  tweet,
  updateRetweet,
})(Tweet);
