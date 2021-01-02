import React from "react";
import { connect } from "react-redux";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import { dark } from "../../../store/actions/userActions";

function Darkmode(props) {
  const handleChange = (e) => {
    props.dark(props.darkm);

    if (!props.darkm) {
      document.querySelector("body").classList.add("darkmode");
      localStorage.setItem("darkmode", "dark");
    } else {
      document.querySelector("body").classList.remove("darkmode");
      localStorage.setItem("darkmode", "light");
    }
  };

  return (
    <div style={{ paddingTop: "20px" }}>
      <FormControlLabel
        control={
          <Switch
            checked={props.darkm}
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

const mapStateToProps = (state) => {
  return {
    darkm: state.userReducer.dark,
  };
};

export default connect(mapStateToProps, { dark })(Darkmode);
