import React, { useEffect } from "react";
import Feed from "../../components/feed/Feed";
import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../store/actions/userActions";
import { fetchTweets } from "../../store/actions/tweetActions";
import { fetchMessages } from "../../store/actions/messageActions";
import "./homepage.styles.scss";

function HomePage(props) {
  // check if user is signed in
  useEffect(() => {
    props.fetchUser();
    props.fetchUsers();
    props.fetchTweets();
    props.fetchMessages();
  }, []);

  return (
    <div id="homepage-container">
      <Feed />
    </div>
  );
}

export default connect(null, {
  fetchUser,
  fetchUsers,
  fetchTweets,
  fetchMessages,
})(HomePage);
