import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import "./notification.styles.scss";

function Notification(props) {
  return (
    <div id="notification-container">
      <List component="nav" style={{ width: "100%" }}>
        <ListItem button>
          <p>{props.notification.message}</p>
        </ListItem>
        <Divider />
      </List>
    </div>
  );
}

export default Notification;
