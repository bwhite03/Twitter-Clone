import React from "react";
import Card from "@material-ui/core/Card";

function Notification(props) {
  return (
    <Card variant="outlined" id="tweet-container">
      <p>{props.notification.message}</p>
    </Card>
  );
}

export default Notification;
