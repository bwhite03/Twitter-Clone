import React from "react";
import Feed from "../../components/feed/Feed";
import WhoToFollow from "../../components/who-to-follow/WhoToFollow";
import "./homepage.styles.scss";

function HomePage() {
  return (
    <div id="homepage-container">
      <Feed />
      <WhoToFollow />
    </div>
  );
}

export default HomePage;
