import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import "./message-list.styles.scss";

function MessageList() {
  return (
    <div id="message-list-container">
      <Card variant="outlined">
        <div className="message-list-nav">
          <Link to="/">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h1 style={{ alignSelf: "center" }}>Messages</h1>
          <div className="icon">
            <ChatOutlinedIcon />
          </div>
        </div>
      </Card>
    </div>
  );
}

export default MessageList;
