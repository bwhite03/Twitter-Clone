import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";
import Card from "@material-ui/core/Card";
import { Avatar } from "@material-ui/core";
import { connect } from "react-redux";
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
          <h1>Thread</h1>
        </div>
        <div className="container">
          <div className="comment-container">
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
