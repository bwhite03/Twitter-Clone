import React from "react";
import { Button } from "@material-ui/core";
import "./unfollow-button.styles.scss";

function UnfollowButton(props) {
  return (
    <div id="unfollow-button">
      <Button
        variant="outlined"
        color="secondary"
        size="small"
        onClick={props.handleDelete}
      >
        Unfollow
      </Button>
    </div>
  );
}

export default UnfollowButton;
