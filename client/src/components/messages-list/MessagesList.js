import React from "react";
import { useParams, Link } from "react-router-dom";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import TextField from "@material-ui/core/TextField";
import Messages from "../messages/Messages";
import "./messages-list.styles.scss";

function MessagesList({ messages }) {
  //get param
  let { id } = useParams();
  let currentMessage = messages.filter((message) => message._id === id);
  currentMessage = currentMessage[0];

  return (
    <div id="messages-list-container">
      <Card variant="outlined">
        <div className="messages-list-nav">
          <Link to="/messages">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h1 style={{ alignSelf: "center" }}>Messages</h1>
          <div className="icon">
            <InfoOutlinedIcon />
          </div>
        </div>
        <div className="dm-container">
          <div className="dms">
            {currentMessage.messages.map((message, index) => (
              <Messages key={index} message={message} />
            ))}
          </div>
          <div className="input">
            <TextField
              style={{ width: "100%" }}
              id="standard-multiline-flexible"
              variant="outlined"
              size="small"
              label="What's happening?"
              multiline
              //   onChange={(e) => setContent(e.target.value)}
              //   value={content}
            />
            <SendOutlinedIcon style={{ alignSelf: "center" }} />
          </div>
        </div>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    messages: state.messageReducer.messages,
  };
};

export default connect(mapStateToProps)(MessagesList);
