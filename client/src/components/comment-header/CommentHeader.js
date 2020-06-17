import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";
import Card from "@material-ui/core/Card";
import { Avatar } from "@material-ui/core";
import { connect } from "react-redux";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import CommentDialog from "../util/comment-dialog/CommentDialog";
import "./comment-header.styles.scss";

function CommentHeader(props) {
  // get current tweet params
  let { id } = useParams();
  let currenttweet = props.tweetInfo.filter((tweet) => tweet._id === id);
  currenttweet = currenttweet[0];

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
            {currenttweet.profileImg ? (
              <Avatar
                src={currenttweet.profileImg}
                alt="userimg"
                sizes={"lg"}
              />
            ) : (
              <Avatar alt="userimg" sizes={"lg"}>
                {currenttweet.username === undefined
                  ? ""
                  : currenttweet.username.charAt(0).toUpperCase()}
              </Avatar>
            )}
          </div>
          <div style={{ width: "100%" }}>
            <div className="comment-info">
              <Link to={`/${currenttweet.userid}`}>
                <p className="username">{currenttweet.username}</p>
              </Link>
              <p className="date">
                {moment(currenttweet.dateCreated).calendar()}
              </p>
            </div>
            <div className="content-container">
              <p>{currenttweet.content}</p>
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
          <CommentDialog id={currenttweet._id} />
        </div>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tweetInfo: state.tweetReducer.tweets,
  };
};

export default connect(mapStateToProps)(CommentHeader);
