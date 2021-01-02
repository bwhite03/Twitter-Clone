import React, { useEffect } from "react";
import Feed from "../../components/feed/Feed";
import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../store/actions/userActions";
import { fetchTweets } from "../../store/actions/tweetActions";
import { fetchMessages } from "../../store/actions/messageActions";
import SideInfo from "../../components/side-info/SideInfo";
import Nav from "../../components/nav/Nav";
import "./homepage.styles.scss";

function HomePage(props) {
  //font size settings
  if (props.font === "default") {
    document.querySelector("body").classList.add("default");
    document.querySelector("body").classList.remove("large");
    document.querySelector("body").classList.remove("small");
    localStorage.setItem("fontsize", "default");
  } else if (props.font === "small") {
    document.querySelector("body").classList.remove("default");
    document.querySelector("body").classList.remove("large");
    document.querySelector("body").classList.add("small");
    localStorage.setItem("fontsize", "small");
  } else {
    document.querySelector("body").classList.remove("default");
    document.querySelector("body").classList.remove("small");
    document.querySelector("body").classList.add("large");
    localStorage.setItem("fontsize", "large");
  }

  useEffect(() => {
    props.fetchUser();
    props.fetchUsers();
    props.fetchTweets();
    props.fetchMessages();
  }, [props.tweets]);

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

const mapStateToProps = (state) => {
  return {
    tweets: state.tweetReducer.tweets,
    font: state.userReducer.font,
  };
};

export default connect(mapStateToProps, {
  fetchUser,
  fetchUsers,
  fetchTweets,
  fetchMessages,
})(HomePage);
