import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CharactersRemaining from "../characters-remaining/CharactersRemaining";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import EmjoiPicker from "../emoji-picker/EmjoiPicker";
import InsertEmoticonOutlinedIcon from "@material-ui/icons/InsertEmoticonOutlined";
import { tweet } from "../../../store/actions/tweetActions";
import { connect } from "react-redux";
import "./tweet-dialog.styles.scss";

function TweetDialog(props) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");
  const [emjoiOpen, setEmjoiOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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

  const submitTweet = () => {
    props.tweet(data);
    setContent("");
    setOpen(false);
  };

  return (
    <div id="form-dialog-container">
      <Button
        className="tweet-dialog"
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
      >
        Tweet
      </Button>
      <ListItemIcon
        className="mobile-tweet-dialog"
        onClick={handleClickOpen}
        style={{ display: "none" }}
      >
        <CreateOutlinedIcon />
      </ListItemIcon>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Tweet</DialogTitle>
        <DialogContent>
          <TextField
            style={{ width: "100%" }}
            id="standard-multiline-flexible"
            label="What's happening?"
            multiline
            onChange={(e) => setContent(e.target.value)}
            value={content}
            inputProps={{ maxLength: 280 }}
          />
          <InsertEmoticonOutlinedIcon
            onClick={openEmjoi}
            style={{ cursor: "pointer", marginTop: "5px" }}
          />
          {emjoiOpen && (
            <EmjoiPicker content={content} setContent={setContent} />
          )}
          <div style={{ paddingTop: "5px" }}>
            <CharactersRemaining content={content} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitTweet}>Tweet</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.userInfo,
  };
};

export default connect(mapStateToProps, { tweet })(TweetDialog);
