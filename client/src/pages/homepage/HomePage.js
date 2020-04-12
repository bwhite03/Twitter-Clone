import React from "react";
import Feed from "../../components/feed/Feed";
import WhoToFollowList from "../../components/who-to-follow-list/WhoToFollowList";
import SearchBar from "../../components/util/search-bar/SearchBar";
import "./homepage.styles.scss";

function HomePage() {
  return (
    <div id="homepage-container">
      <Feed />
      <div className="side-info-container">
        <SearchBar />
        <WhoToFollowList />
      </div>
    </div>
  );
}

export default HomePage;
