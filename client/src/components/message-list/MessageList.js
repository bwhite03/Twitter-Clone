import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import MessageDialog from "../util/message-dialog/MessageDialog";
import Tooltip from "@material-ui/core/Tooltip";
import Message from "../message/Message";
import { connect } from "react-redux";
import { createMessage } from "../../store/actions/messageActions";
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
    message: {
      message: content,
      username: props.userInfo.username,
      avatar: props.userInfo.profileImg,
    },
    senderInfo: props.userInfo,
    receiverInfo: user,
  };

  const createMessage = () => {
    props.createMessage(data);
    setContent("");
    setOpen(false);
  };

  const filteredMessages = props.messages.filter((message) => {
    return (
      props.userInfo._id === message.receiverInfo._id ||
      props.userInfo._id === message.senderInfo._id
    );
  });

  return (
    <div id="message-list-container">
      <Card variant="outlined">
        <div className="message-list-nav">
          <Link to="/">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h1 style={{ alignSelf: "center" }}>Messages</h1>
          <div className="icon" onClick={handleClickOpen}>
            <Tooltip title="Create Message">
              <ChatOutlinedIcon />
            </Tooltip>
          </div>
        </div>
        {filteredMessages.map((message, index) => (
          <Message key={message._id} message={message} />
        ))}
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
    messages: state.messageReducer.messages,
  };
};

export default connect(mapStateToProps, { createMessage })(MessageList);
