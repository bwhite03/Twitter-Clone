import React from "react";
import { connect } from "react-redux";
import Tweet from "../tweet/Tweet";

function TweetList(props) {
  return (
    <div id="tweet-list-container">
      {props.tweets.map((tweets) => (
        <Tweet key={tweets._id} tweet={tweets} userInfo={props.userInfo} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tweets: state.tweetReducer.tweets,
    userInfo: state.userReducer.userInfo,
  };
};

export default connect(mapStateToProps)(TweetList);
