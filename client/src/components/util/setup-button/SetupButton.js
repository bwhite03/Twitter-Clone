import React from "react";
import { Button } from "@material-ui/core";
import "./setup-button.styles.scss";

function SetupButton() {
  return (
    <div id="setup-button">
      <Button variant="outlined" color="primary" size="small">
        Set Up Profile
      </Button>
    </div>
  );
}

export default SetupButton;
