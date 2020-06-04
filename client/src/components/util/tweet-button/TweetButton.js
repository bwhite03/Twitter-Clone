import React from "react";
import { Button } from "@material-ui/core";
import "./tweet-button.styles.scss";

function TweetButton(props) {
  return (
    <div id="tweet-button-container">
      <Button
        size={props.size}
        variant="contained"
        color="primary"
        onClick={props.handleTweet}
      >
        Tweet
      </Button>
    </div>
  );
}

export default TweetButton;
