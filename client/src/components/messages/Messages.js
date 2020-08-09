import React from "react";
import moment from "moment";
import "./messages.styles.scss";

function Messages({ message, userInfo }) {
  return (
    <div id="messages-container">
      {userInfo.username === message.username ? (
        <div className="sender-message-container">
          <div className="sender-message">
            <p>{message.message}</p>
          </div>
          <p className="date">{moment(message.dateCreated).calendar()}</p>
        </div>
      ) : (
        <div className="receiver-message-container">
          <div className="receiver-message">
            <p>{message.message}</p>
          </div>
          <p className="date">{moment(message.dateCreated).calendar()}</p>
        </div>
      )}
    </div>
  );
}

export default Messages;
