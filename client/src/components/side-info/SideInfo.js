import React, { useState } from "react";
import SearchBar from "../util/search-bar/SearchBar";
import WhoToFollowList from "../who-to-follow-list/WhoToFollowList";
import { connect } from "react-redux";
import "./side-info.styles.scss";

function SideInfo(props) {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredUsers = props.users.filter((user) => {
    return user.username.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div id="side-info-container">
      <SearchBar handleChange={handleChange} />
      <WhoToFollowList filteredUsers={filteredUsers} />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  };
};

export default connect(mapStateToProps)(SideInfo);
