import React from "react";
import { Avatar } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import moment from "moment";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import "./tweet.styles.scss";

function Tweet(props) {
  return (
    <Card variant="outlined" id="tweet-container">
      <div className="containerr">
        <div className="avatar">
          {props.tweet.profileImg ? (
            <Avatar src={props.tweet.profileImg} alt="userimg" sizes={"lg"} />
          ) : (
            <Avatar alt="userimg" sizes={"lg"}>
              {props.tweet.username.charAt(0).toUpperCase()}
            </Avatar>
          )}
        </div>
        <div>
          <div className="info-container">
            <Link to={props.tweet.userid}>
              <p className="username">{props.tweet.username}</p>
            </Link>
            <p className="date">{moment(props.tweet.dateCreated).calendar()}</p>
          </div>
          <div className="content-container">
            <p>{props.tweet.content}</p>
          </div>
          <div className="icons">
            <Link to={`comment/${props.tweet._id}`}>
              <div className="comment-icon">
                <ChatBubbleOutlineOutlinedIcon /> <p>3</p>
              </div>
            </Link>
            <div className="heart-icon">
              <FavoriteBorderOutlinedIcon /> <p>3</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default Tweet;
