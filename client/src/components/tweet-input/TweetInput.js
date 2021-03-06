import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import TweetButton from "../util/tweet-button/TweetButton";
import Card from "@material-ui/core/Card";
import CharactersRemaining from "../util/characters-remaining/CharactersRemaining";
import InsertEmoticonOutlinedIcon from "@material-ui/icons/InsertEmoticonOutlined";
import EmjoiPicker from "../util/emoji-picker/EmjoiPicker";
import { connect } from "react-redux";
import { tweet } from "../../store/actions/tweetActions";
import "./tweet-input.styles.scss";

function TweetInput(props) {
  const [content, setContent] = useState("");
  const [emjoiOpen, setEmjoiOpen] = useState(false);

  const submitTweet = () => {
    props.tweet(data);
    setContent("");
  };

  const openEmjoi = () => {
    setEmjoiOpen(!emjoiOpen);
  };

  const data = {
    content: content,
    username: props.userInfo.username,
    profileImg: props.userInfo.profileImg,
    userid: props.userInfo._id,
    comments: [],
    likes: [],
    retweets: [],
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
              inputProps={{ maxLength: 280 }}
            />
            <InsertEmoticonOutlinedIcon onClick={openEmjoi} />
            {emjoiOpen && (
              <EmjoiPicker content={content} setContent={setContent} />
            )}
          </form>
        </div>
        <div style={{ display: "flex" }}>
          {content && (
            <div style={{ alignSelf: "center", marginLeft: "15px" }}>
              <CharactersRemaining content={content} />
            </div>
          )}
          <div className="tweet-button" style={{ alignSelf: "center" }}>
            <TweetButton size={"small"} handleTweet={submitTweet} />
          </div>
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
