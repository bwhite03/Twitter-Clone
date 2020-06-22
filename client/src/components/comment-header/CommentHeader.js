import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import Card from "@material-ui/core/Card";
import { Avatar } from "@material-ui/core";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import CommentDialog from "../util/comment-dialog/CommentDialog";
import "./comment-header.styles.scss";

function CommentHeader(props) {
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
                <ChatBubbleOutlineOutlinedIcon /> <p>3</p>
              </div>
              <div className="heart-icon">
                <FavoriteBorderOutlinedIcon /> <p>3</p>
              </div>
            </div>
          </div>
        </div>
        <div className="likes">
          <p>1k Likes</p>
          <CommentDialog id={props.tweet._id} />
        </div>
      </Card>
    </div>
  );
}

export default CommentHeader;
