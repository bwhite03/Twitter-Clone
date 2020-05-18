import React from "react";
import TextField from "@material-ui/core/TextField";
import "./search-bar.styles.scss";

function SearchBar(props) {
  return (
    <div id="search-bar">
      <TextField
        onChange={props.handleChange}
        id="standard-basic"
        label="Search who to follow"
        size="small"
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default SearchBar;
