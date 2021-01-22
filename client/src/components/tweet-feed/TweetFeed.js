import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import CommentHeader from "../comment-header/CommentHeader";
import CommentList from "../comment-list/CommentList";

function TweetFeed(props) {
  // get current tweet params
  let { id } = useParams();
  let currenttweet = props.tweetInfo.filter((tweet) => tweet._id === id);
  currenttweet = currenttweet[0];

  return (
    <div>
      <CommentHeader tweet={currenttweet} userInfo={props.userInfo} />
      <CommentList tweet={currenttweet} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tweetInfo: state.tweetReducer.tweets,
    userInfo: state.userReducer.userInfo,
  };
};

export default connect(mapStateToProps)(TweetFeed);
