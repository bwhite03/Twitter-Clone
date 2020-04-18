import React from "react";
import SearchBar from "../util/search-bar/SearchBar";
import WhoToFollowList from "../who-to-follow-list/WhoToFollowList";
import "./side-info.styles.scss";

function SideInfo() {
  return (
    <div id="side-info-container">
      <SearchBar />
      <WhoToFollowList />
    </div>
  );
}

export default SideInfo;
