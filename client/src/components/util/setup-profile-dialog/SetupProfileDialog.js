import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { updateProfile } from "../../../store/actions/userActions";
import { connect } from "react-redux";
import "./setup-profile-dialog.styles.scss";

function SetupProfileDialog(props) {
  const [open, setOpen] = useState(false);
  const [profileImg, setProfileImg] = useState("");
  const [profileBackground, setProfileBackground] = useState("");
  const [location, setLocation] = useState("");
  const [bio, setBio] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitComment = () => {
    props.updateProfile(data);
    setProfileImg("");
    setProfileBackground("");
    setLocation("");
    setBio("");
    setOpen(false);
  };

  const data = {
    userId: props.userInfo._id,
    profileImg: profileImg ? profileImg : props.userInfo.profileImg,
    profileBackground: profileBackground
      ? profileBackground
      : props.userInfo.profileBackground,
    location: location ? location : props.userInfo.location,
    bio: bio ? bio : props.userInfo.bio,
  };

  return (
    <div id="setup-profile-dialog-container">
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        size="small"
      >
        Set Up Profile
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="form-dialog-title">Set Up Profile</DialogTitle>
        <DialogContent>
          <TextField
            style={{ width: "100%", paddingTop: "10px" }}
            id="standard-multiline-flexible"
            label="Enter avatar url"
            multiline
            onChange={(e) => setProfileImg(e.target.value)}
            value={profileImg}
          />
          <TextField
            style={{ width: "100%" }}
            id="standard-multiline-flexible"
            label="Enter background url"
            multiline
            onChange={(e) => setProfileBackground(e.target.value)}
            value={profileBackground}
          />
          <TextField
            style={{ width: "100%" }}
            id="standard-multiline-flexible"
            label="Enter location"
            multiline
            onChange={(e) => setLocation(e.target.value)}
            value={location}
          />
          <TextField
            style={{ width: "100%" }}
            id="standard-multiline-flexible"
            label="Enter bio"
            multiline
            onChange={(e) => setBio(e.target.value)}
            value={bio}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={submitComment}>Update</Button>
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

export default connect(mapStateToProps, { updateProfile })(SetupProfileDialog);
