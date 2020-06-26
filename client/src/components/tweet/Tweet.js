import React from "react";
import { Avatar } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import { Link } from "react-router-dom";
import moment from "moment";
import { connect } from "react-redux";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import { updateLikes, updateUnlikes } from "../../store/actions/tweetActions";
import "./tweet.styles.scss";

function Tweet(props) {
  const id = {
    tweetId: props.tweet._id,
    userId: props.userInfo._id,
  };

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
        <div style={{ width: "100%" }}>
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
                <ChatBubbleOutlineOutlinedIcon />{" "}
                <p>{props.tweet.comments.length}</p>
              </div>
            </Link>
            {props.tweet.likes.includes(props.userInfo._id) ? (
              <div
                style={{ color: "pink" }}
                className="heart-icon"
                onClick={props.updateUnlikes.bind(null, id)}
              >
                <FavoriteBorderOutlinedIcon /> <p>{props.tweet.likes.length}</p>
              </div>
            ) : (
              <div
                className="heart-icon"
                onClick={props.updateLikes.bind(null, id)}
              >
                <FavoriteBorderOutlinedIcon /> <p>{props.tweet.likes.length}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
}

export default connect(null, { updateLikes, updateUnlikes })(Tweet);
