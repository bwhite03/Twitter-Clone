import React, { useEffect } from "react";
import Feed from "../../components/feed/Feed";
import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../store/actions/userActions";
import { fetchTweets } from "../../store/actions/tweetActions";
import { fetchMessages } from "../../store/actions/messageActions";
import "./homepage.styles.scss";

function HomePage(props) {
  useEffect(() => {
    props.fetchUser();
    props.fetchUsers();
    props.fetchTweets();
    props.fetchMessages();
  }, [props.tweets]);

  return (
    <div id="homepage-container">
      <Feed />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    tweets: state.tweetReducer.tweets,
  };
};

export default connect(mapStateToProps, {
  fetchUser,
  fetchUsers,
  fetchTweets,
  fetchMessages,
})(HomePage);
