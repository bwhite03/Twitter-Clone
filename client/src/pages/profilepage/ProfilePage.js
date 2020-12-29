import React from "react";
import ProfileInfo from "../../components/profile-info/ProfileInfo";
import SideInfo from "../../components/side-info/SideInfo";
import Nav from "../../components/nav/Nav";
import "./profilepage.styles.scss";

function ProfilePage() {
  return (
    <div id="profilepage-container" style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}>
      <Nav />
      <ProfileInfo />
      <SideInfo />
    </div>
  );
}

export default ProfilePage;
