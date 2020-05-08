import React from "react";
import Feed from "../../components/feed/Feed";
import Nav from "../../components/nav/Nav";
import SideInfo from "../../components/side-info/SideInfo";
import "./homepage.styles.scss";

function HomePage() {
  return (
    <div
      id="homepage-container"
      style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}
    >
      <Nav />
      <Feed />
      <SideInfo />
    </div>
  );
}

export default HomePage;
