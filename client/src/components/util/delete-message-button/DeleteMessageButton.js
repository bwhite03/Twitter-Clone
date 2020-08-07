import React from "react";
import { Button } from "@material-ui/core";

function DeleteMessageButton() {
  return (
    <div id="unfollow-button">
      <Button variant="outlined" color="secondary" size="small">
        Delete
      </Button>
    </div>
  );
}

export default DeleteMessageButton;
