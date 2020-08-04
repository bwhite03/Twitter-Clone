import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import MessageDialog from "../util/message-dialog/MessageDialog";
import "./message-list.styles.scss";

function MessageList() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div id="message-list-container">
      <Card variant="outlined">
        <div className="message-list-nav">
          <Link to="/">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h1 style={{ alignSelf: "center" }}>Messages</h1>
          <div className="icon" onClick={handleClickOpen}>
            <ChatOutlinedIcon />
          </div>
        </div>
      </Card>
      <MessageDialog handleClose={handleClose} open={open} />
    </div>
  );
}

export default MessageList;
