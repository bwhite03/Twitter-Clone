import React from "react";
import { Avatar } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import TweetButton from "../util/tweet-button/TweetButton";
import Card from "@material-ui/core/Card";
import "./tweet-input.styles.scss";

function TweetInput() {
  return (
    <div id="tweet-input-container">
      <Card variant="outlined">
        <div>
          <h1>Home</h1>
        </div>
        <div className="input-container">
          <Avatar
            src="http://www.thecellartrust.org/wp-content/uploads/2017/04/Trustees.jpg"
            alt="userimg"
            sizes={"lg"}
          />
          <form className="tweet-input-form">
            <TextField
              id="standard-multiline-flexible"
              label="What's happening?"
              multiline
            />
          </form>
        </div>
        <div className="tweet-button">
          <TweetButton size={"small"} />
        </div>
      </Card>
    </div>
  );
}

export default TweetInput;
