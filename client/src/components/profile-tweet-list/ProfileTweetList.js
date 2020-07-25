import React from "react";
import Card from "@material-ui/core/Card";
import ProfileTweet from "../profile-tweet/ProfileTweet";
import { connect } from "react-redux";

function ProfileTweetList(props) {
  const filteredTweets = props.tweetInfo.filter((tweet) => {
    return tweet.userid === props.userInfo._id;
  });

  return (
    <div id="profile-tweet-list-container">
      <Card>
        {filteredTweets.map((tweet) => (
          <ProfileTweet key={tweet._id} tweet={tweet} />
        ))}
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tweetInfo: state.tweetReducer.tweets,
  };
};

export default connect(mapStateToProps)(ProfileTweetList);
