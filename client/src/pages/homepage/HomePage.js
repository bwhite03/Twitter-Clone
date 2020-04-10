import React from "react";
import Feed from "../../components/feed/Feed";
import WhoToFollow from "../../components/who-to-follow/WhoToFollow";
import SearchBar from "../../components/util/search-bar/SearchBar";
import "./homepage.styles.scss";

function HomePage() {
  return (
    <div id="homepage-container">
      <Feed />
      <div className="side-info-container">
        <SearchBar />
        <WhoToFollow />
      </div>
    </div>
  );
}

export default HomePage;
