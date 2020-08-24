import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CharactersRemaining from "../characters-remaining/CharactersRemaining";
import { comment } from "../../../store/actions/tweetActions";
import { connect } from "react-redux";
import "./comment-dialog.styles.scss";

function CommentDialog(props) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitComment = () => {
    props.comment(data);
    setContent("");
    setOpen(false);
  };

  const data = {
    content: content,
    id: props.id,
    username: props.userInfo.username,
    profileImg: props.userInfo.profileImg,
    userid: props.userInfo._id,
    notification: {
      message: `${props.userInfo.username} commented on your tweet`,
      userId: props.userInfo._id,
    },
  };

  return (
    <div id="comment-dialog-container">
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        size="small"
      >
        Comment
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Comment</DialogTitle>
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
          <div style={{ paddingTop: "5px" }}>
            <CharactersRemaining content={content} />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitComment}>Comment</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.userInfo,
    tweetInfo: state.tweetReducer.tweets,
  };
};

export default connect(mapStateToProps, { comment })(CommentDialog);
