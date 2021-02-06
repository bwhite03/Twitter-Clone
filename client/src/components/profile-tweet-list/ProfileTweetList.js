import React from "react";
import Card from "@material-ui/core/Card";
import ProfileTweet from "../profile-tweet/ProfileTweet";
import { connect } from "react-redux";
import "./profile-tweet-list.styles.scss";

function ProfileTweetList(props) {
  const filteredTweets = props.tweetInfo.filter((tweet) => {
    return tweet.userid === props.userInfo._id;
  });

  return (
    <div id="profile-tweet-list-container">
      <Card className="card">
        {filteredTweets.map((tweet) => (
          <ProfileTweet
            key={tweet._id}
            tweet={tweet}
            userInfoId={props.userInfoId}
          />
        ))}
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tweetInfo: state.tweetReducer.tweets,
    userInfoId: state.userReducer.userInfo._id,
  };
};

export default connect(mapStateToProps)(ProfileTweetList);
