import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

function Darkmode({ handleChange, darkmode, dark }) {
  return (
    <div style={{ paddingTop: "20px" }}>
      <FormControlLabel
        control={
          <Switch checked={dark} onChange={handleChange} name="darkmode" />
        }
        label="Darkmode"
        labelPlacement="end"
      />
    </div>
  );
}

export default Darkmode;
