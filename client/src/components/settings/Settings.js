import React from "react";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Slider from "@material-ui/core/Slider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import "./settings.styles.scss";

function Settings() {
  return (
    <div id="settings-container">
      <Card variant="outlined">
        <div className="settings-info-nav">
          <Link to="/">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h1>Settings</h1>
        </div>
        <div className="settings">
          <div className="font-size">
            <h2>Font Size</h2>
            <Slider
              defaultValue={30}
              aria-labelledby="discrete-slider"
              valueLabelDisplay="auto"
              step={10}
              marks
              min={10}
              max={40}
            />
          </div>
          <div className="color">
            <h2>Color</h2>
            <RadioGroup
              row
              aria-label="gender"
              name="gender1"
              defaultValue="blue"
              //   value={value}
              //   onChange={handleChange}
            >
              <FormControlLabel
                value="blue"
                control={<Radio />}
                label="Blue"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="Red"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Purple"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="other1"
                control={<Radio />}
                label="Green"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </div>
          <div className="background">
            <h2>Background</h2>
            <RadioGroup
              row
              aria-label="gender"
              name="gender1"
              defaultValue="default"
              //   value={value}
              //   onChange={handleChange}
            >
              <FormControlLabel
                value="default"
                control={<Radio />}
                label="Default"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="dark"
                control={<Radio />}
                label="Dark"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default Settings;
