import React from "react";
import "./tweet.styles.scss";

function Tweet(props) {
  return (
    <div id="tweet-container">
      <div className="info-container">
        <img src={props.tweet.profileImg} alt="userimg" />
        <p className="username">{props.tweet.username}</p>
        <p className="date">{props.tweet.date}</p>
      </div>
      <div className="content-container">
        <p>{props.tweet.tweet}</p>
      </div>
    </div>
  );
}

export default Tweet;
