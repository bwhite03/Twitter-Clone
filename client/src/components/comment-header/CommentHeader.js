import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Card from "@material-ui/core/Card";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import CommentDialog from "../util/comment-dialog/CommentDialog";
import { updateLikes, updateUnlikes } from "../../store/actions/tweetActions";
import { connect } from "react-redux";
import "./comment-header.styles.scss";

function CommentHeader(props) {
  const id = {
    tweetId: props.tweet._id,
    userId: props.userInfo._id,
  };

  return (
    <div id="comment-header-container">
      <Card variant="outlined">
        <div className="comment-info-nav">
          <Link to="/">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h1>Tweet</h1>
        </div>
        <div className="container">
          <div className="avatar">
            {props.tweet.profileImg ? (
              <Avatar src={props.tweet.profileImg} alt="userimg" sizes={"lg"} />
            ) : (
              <Avatar alt="userimg" sizes={"lg"}>
                {props.tweet.username === undefined
                  ? ""
                  : props.tweet.username.charAt(0).toUpperCase()}
              </Avatar>
            )}
          </div>
          <div style={{ width: "100%" }}>
            <div className="comment-info">
              <Link to={`/${props.tweet.userid}`}>
                <p className="username">{props.tweet.username}</p>
              </Link>
              <p className="date">
                {moment(props.tweet.dateCreated).calendar()}
              </p>
            </div>
            <div className="content-container">
              <p>{props.tweet.content}</p>
            </div>
            <div className="icons">
              <div className="comment-icon">
                <ChatBubbleOutlineOutlinedIcon />{" "}
                <p>{props.tweet.comments.length}</p>
              </div>
              {props.tweet.likes.includes(props.userInfo._id) ? (
                <div
                  style={{ color: "pink" }}
                  className="heart-icon"
                  onClick={props.updateUnlikes.bind(null, id)}
                >
                  <FavoriteBorderOutlinedIcon />{" "}
                  <p>{props.tweet.likes.length}</p>
                </div>
              ) : (
                <div
                  className="heart-icon"
                  onClick={props.updateLikes.bind(null, id)}
                >
                  <FavoriteBorderOutlinedIcon />{" "}
                  <p>{props.tweet.likes.length}</p>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="likes">
          <p>{props.tweet.likes.length} Likes</p>
          <CommentDialog id={props.tweet._id} />
        </div>
      </Card>
    </div>
  );
}

export default connect(null, { updateLikes, updateUnlikes })(CommentHeader);
