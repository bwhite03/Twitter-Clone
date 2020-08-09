import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import { fetchMessages } from "../../store/actions/messageActions";
import moment from "moment";
import "./message.styles.scss";

function Message({ message, fetchMessages }) {
  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  return (
    <div id="message-container">
      <List component="nav" style={{ width: "100%" }}>
        <ListItem button style={{ display: "block" }}>
          <Link to={`messages/${message._id}`}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div style={{ display: "flex" }}>
                {message.senderInfo.profileImg ? (
                  <Avatar
                    src={message.senderInfo.profileImg}
                    alt="userimg"
                    sizes={"lg"}
                  />
                ) : (
                  <Avatar alt="userimg" sizes={"lg"}>
                    {message.senderInfo.username.charAt(0).toUpperCase()}
                  </Avatar>
                )}
                <div
                  className="follow-user-info-container"
                  style={{ display: "flex" }}
                >
                  <p>{message.senderInfo.username}</p>
                </div>
              </div>
              <p style={{ alignSelf: "center", fontSize: "12px" }}>
                {!message.messages
                  ? "Loading..."
                  : moment(message.messages[0].dateCreated).calendar()}
              </p>
            </div>
            <div
              className="info-container"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <p style={{ marginLeft: "50px" }}>
                {!message.messages
                  ? "Loading..."
                  : message.messages[0].message.substring(0, 10) + "..."}
              </p>
            </div>
          </Link>
        </ListItem>
        <Divider />
      </List>
    </div>
  );
}

export default connect(null, { fetchMessages })(Message);
