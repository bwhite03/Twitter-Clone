import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import TweetButton from "../util/tweet-button/TweetButton";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";
import { tweet } from "../../store/actions/tweetActions";
import "./tweet-input.styles.scss";

function TweetInput(props) {
  const [content, setContent] = useState("");

  const submitTweet = () => {
    props.tweet(data);
    setContent("");
  };

  const data = {
    content: content,
    username: props.userInfo.username,
    profileImg: props.userInfo.profileImg,
    userid: props.userInfo._id,
  };

  return (
    <div id="tweet-input-container">
      <Card variant="outlined">
        <div>
          <h1>Home</h1>
        </div>
        <div className="input-container">
          {props.userInfo.profileImg ? (
            <Avatar
              src={props.userInfo.profileImg}
              alt="userimg"
              sizes={"lg"}
            />
          ) : (
            <Avatar alt="userimg" sizes={"lg"}>
              {props.userInfo.username === undefined
                ? ""
                : props.userInfo.username.charAt(0).toUpperCase()}
            </Avatar>
          )}
          <form className="tweet-input-form">
            <TextField
              id="standard-multiline-flexible"
              label="What's happening?"
              multiline
              onChange={(e) => setContent(e.target.value)}
              value={content}
            />
          </form>
        </div>
        <div className="tweet-button">
          <TweetButton size={"small"} handleTweet={submitTweet} />
        </div>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.userInfo,
  };
};

export default connect(mapStateToProps, { tweet })(TweetInput);
