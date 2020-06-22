import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import CommentHeader from "../comment-header/CommentHeader";
import CommentList from "../comment-list/CommentList";
import "./tweet-feed.styles.scss";

function TweetFeed(props) {
  // get current tweet params
  let { id } = useParams();
  let currenttweet = props.tweetInfo.filter((tweet) => tweet._id === id);
  currenttweet = currenttweet[0];

  return (
    <div>
      <CommentHeader tweet={currenttweet} />
      <CommentList tweet={currenttweet} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tweetInfo: state.tweetReducer.tweets,
  };
};

export default connect(mapStateToProps)(TweetFeed);
