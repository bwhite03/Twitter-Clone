import React from "react";
import { Button } from "@material-ui/core";
import "./follow-button.styles.scss";

function FollowButton(props) {
  return (
    <div id="follow-button">
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={props.handleUpdate}
      >
        Follow
      </Button>
    </div>
  );
}

export default FollowButton;
