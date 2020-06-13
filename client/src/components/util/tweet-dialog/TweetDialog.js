import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { tweet } from "../../../store/actions/tweetActions";
import { connect } from "react-redux";
import "./tweet-dialog.styles.scss";

function TweetDialog(props) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitTweet = () => {
    props.tweet(data);
    setContent("");
    setOpen(false);
  };

  const data = {
    content: content,
    username: props.userInfo.username,
    profileImg: props.userInfo.profileImg,
    userid: props.userInfo._id,
  };

  return (
    <div id="form-dialog-container">
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Tweet
      </Button>
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
          />
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
