import React from "react";
import { Button } from "@material-ui/core";
import "./unfollow-button.styles.scss";

function UnfollowButton() {
  return (
    <div id="unfollow-button">
      <Button variant="outlined" color="secondary" size="small">
        Follow
      </Button>
    </div>
  );
}

export default UnfollowButton;
