import React from "react";
import Button from "@material-ui/core/Button";
import { Avatar } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import moment from "moment";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import "./retweet.styles.scss";

function RetweetDialog(props) {
  return (
    <div id="form-dialog-container">
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Retweet</DialogTitle>
        <DialogContent>
          <TextField
            style={{ width: "100%" }}
            id="standard-multiline-flexible"
            label="Add comment to retweet"
            multiline
            onChange={(e) => props.setContent(e.target.value)}
            value={props.content}
          />
          <div className="retweet">
            <div className="avatar">
              {props.tweet.profileImg ? (
                <Avatar
                  src={props.tweet.profileImg}
                  alt="userimg"
                  sizes={"lg"}
                />
              ) : (
                <Avatar alt="userimg" sizes={"lg"}>
                  {props.tweet.username.charAt(0).toUpperCase()}
                </Avatar>
              )}
            </div>
            <div style={{ width: "100%" }}>
              <div className="info-container">
                <p className="username">{props.tweet.username}</p>
                <p className="date">
                  {moment(props.tweet.dateCreated).calendar()}
                </p>
              </div>
              <div className="content-container">
                <p>{props.tweet.content}</p>
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleClose}>Cancel</Button>
          <Button onClick={props.submitRetweet}>Retweet</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default RetweetDialog;
