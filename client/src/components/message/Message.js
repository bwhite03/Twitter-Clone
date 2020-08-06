import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import moment from "moment";
import "./message.styles.scss";

function Message(props) {
  return (
    <div id="message-container">
      <List component="nav" style={{ width: "100%" }}>
        <ListItem button>
          <Link to="/messages">
            <div style={{ display: "flex" }}>
              {props.message.senderInfo.profileImg ? (
                <Avatar
                  src={props.message.senderInfo.profileImg}
                  alt="userimg"
                  sizes={"lg"}
                />
              ) : (
                <Avatar alt="userimg" sizes={"lg"}>
                  {props.message.senderInfo.username.charAt(0).toUpperCase()}
                </Avatar>
              )}
              <div className="follow-user-info-container">
                <p>{props.message.senderInfo.username}</p>
              </div>
              <div>
                <p className="date">
                  {moment(props.message.messages[0].dateCreated).calendar()}
                </p>
              </div>
            </div>
          </Link>
        </ListItem>
        <Divider />
      </List>
    </div>
  );
}

export default Message;
