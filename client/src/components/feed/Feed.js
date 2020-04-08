import React from "react";
import TweetInput from "../tweet-input/TweetInput";
import "./feed.styles.scss";

function Feed() {
  return (
    <div id="feed-container">
      <TweetInput />
    </div>
  );
}

export default Feed;
