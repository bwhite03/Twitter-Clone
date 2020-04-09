import React from "react";
import TweetInput from "../tweet-input/TweetInput";
import TweetList from "../tweet-list/TweetList";
import "./feed.styles.scss";

function Feed() {
  return (
    <div id="feed-container">
      <TweetInput />
      <TweetList />
    </div>
  );
}

export default Feed;
