import React from "react";
import TweetFeed from "../../components/tweet-feed/TweetFeed";
import Nav from "../../components/nav/Nav";
import SideInfo from "../../components/side-info/SideInfo";
import "./commentpage.styles.scss";

function CommentPage() {
  return (
    <div
      id="commentpage-container"
      style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}
    >
      <Nav />
      <TweetFeed />
      <SideInfo />
    </div>
  );
}

export default CommentPage;
