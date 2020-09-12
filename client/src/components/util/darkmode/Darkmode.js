import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";

function Darkmode({ handleChange, darkmode }) {
  return (
    <div style={{ paddingTop: "20px" }}>
      <FormControlLabel
        control={
          <Switch
            checked={darkmode.darkmode}
            onChange={handleChange}
            name="darkmode"
          />
        }
        label="Darkmode"
        labelPlacement="end"
      />
    </div>
  );
}

export default Darkmode;
