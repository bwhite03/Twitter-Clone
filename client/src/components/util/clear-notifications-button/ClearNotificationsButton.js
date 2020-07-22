import React from "react";
import { Button } from "@material-ui/core";
import "./clear-notifications-button.styles.scss";

function ClearNotificationsButton(props) {
  return (
    <div id="clear-notifications-button">
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={props.clearNotifications}
      >
        Clear Notifications
      </Button>
    </div>
  );
}

export default ClearNotificationsButton;
