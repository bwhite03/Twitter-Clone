import React from "react";
import { Avatar } from "@material-ui/core";
import TweetButton from "../util/tweet-button/TweetButton";
import "./tweet-input.styles.scss";

function TweetInput() {
  return (
    <div id="tweet-input-container">
      <div>
        <h1>Home</h1>
      </div>
      <div className="input-container">
        <Avatar
          src="http://www.thecellartrust.org/wp-content/uploads/2017/04/Trustees.jpg"
          alt="userimg"
          sizes={"lg"}
        />
        <input type="text" placeholder="What's happening?" />
      </div>
      <div className="tweet-button">
        <TweetButton size={"small"} />
      </div>
    </div>
  );
}

export default TweetInput;
