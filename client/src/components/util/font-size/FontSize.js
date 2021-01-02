import React from "react";
import { connect } from "react-redux";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { fontSize } from "../../../store/actions/userActions";

function FontSize(props) {
  return (
    <div style={{ paddingTop: "10px" }}>
      <FormControl component="fieldset">
        <FormLabel component="legend">Font Size</FormLabel>
        <RadioGroup
          aria-label="fontsize"
          name="fontsize"
          value={props.font}
          onChange={props.fontSize}
          row
        >
          <FormControlLabel value="small" control={<Radio />} label="Small" />
          <FormControlLabel
            value="default"
            control={<Radio />}
            label="Default"
          />
          <FormControlLabel value="large" control={<Radio />} label="Large" />
        </RadioGroup>
      </FormControl>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    font: state.userReducer.font,
  };
};

export default connect(mapStateToProps, { fontSize })(FontSize);
