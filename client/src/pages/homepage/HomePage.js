import React, { useEffect } from "react";
import Feed from "../../components/feed/Feed";
import Nav from "../../components/nav/Nav";
import SideInfo from "../../components/side-info/SideInfo";
import { connect } from "react-redux";
import { fetchUser, fetchUsers } from "../../store/actions/userActions";
import "./homepage.styles.scss";

function HomePage(props) {
  // check if user is signed in
  useEffect(() => {
    props.fetchUser();
    props.fetchUsers();
  }, []);

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

export default connect(null, { fetchUser, fetchUsers })(HomePage);
