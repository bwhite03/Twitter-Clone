import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import MessageDialog from "../util/message-dialog/MessageDialog";
import { connect } from "react-redux";
import { createMessage } from "../../store/actions/userActions";
import "./message-list.styles.scss";

function MessageList(props) {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [content, setContent] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const data = {
    content: content,
    userInfo: props.userInfo,
    user: user,
  };

  const createMessage = () => {
    props.createMessage(data);
    setContent("");
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
      <MessageDialog
        handleClose={handleClose}
        open={open}
        setUser={setUser}
        user={user}
        setContent={setContent}
        content={content}
        createMessage={createMessage}
      />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.userInfo,
  };
};

export default connect(mapStateToProps, { createMessage })(MessageList);
