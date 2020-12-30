import React, { useState } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Tooltip from "@material-ui/core/Tooltip";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import Darkmode from "../darkmode/Darkmode";
import FontSize from "../font-size/FontSize";
import { dark } from "../../../store/actions/userActions";
import "./settings-dialog.styles.scss";

function SettingsDialog(props) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    props.dark(props.darkm);

    if (!props.darkm) {
      document.querySelector("body").classList.add("darkmode");
      localStorage.setItem("darkmode", "dark");
    } else {
      document.querySelector("body").classList.remove("darkmode");
      localStorage.setItem("darkmode", "light");
    }
  };

  return (
    <div id="settings-dialog-container">
      <div className="settings-icon" onClick={handleClickOpen}>
        <Tooltip title="Settings">
          <SettingsOutlinedIcon />
        </Tooltip>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
      >
        <DialogTitle id="settings-dialog-title">Settings</DialogTitle>
        <DialogContent>
          <Darkmode handleChange={handleChange} dark={props.darkm} />
          <FontSize />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    darkm: state.userReducer.dark,
  };
};

export default connect(mapStateToProps, { dark })(SettingsDialog);
