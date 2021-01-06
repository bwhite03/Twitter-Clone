import React from "react";
import { connect } from "react-redux";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { colorPicker } from "../../../store/actions/userActions";

function ColorPicker(props) {
  //color settings
  if (props.color === "blue") {
    localStorage.setItem("color", "blue");
  } else if (props.color === "red") {
    localStorage.setItem("color", "red");
  } else if (props.color === "purple") {
    localStorage.setItem("color", "purple");
  } else if (props.color === "orange") {
    localStorage.setItem("color", "orange");
  } else {
    localStorage.setItem("color", "green");
  }

  return (
    <div style={{ paddingTop: "10px" }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Color</FormLabel>
        <RadioGroup
          aria-label="fontsize"
          name="color"
          value={props.color}
          onChange={props.colorPicker}
          row
        >
          <FormControlLabel value="red" control={<Radio />} label="Red" />
          <FormControlLabel value="purple" control={<Radio />} label="Purple" />
          <FormControlLabel value="blue" control={<Radio />} label="Blue" />
          <FormControlLabel value="orange" control={<Radio />} label="Orange" />
          <FormControlLabel value="green" control={<Radio />} label="Green" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    color: state.userReducer.color,
  };
};

export default connect(mapStateToProps, { colorPicker })(ColorPicker);
