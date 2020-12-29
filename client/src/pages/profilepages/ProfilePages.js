import React from "react";
import ProfileInfos from "../../components/profile-infos/ProfileInfos";
import SideInfo from "../../components/side-info/SideInfo";
import Nav from "../../components/nav/Nav";

function ProfilePages() {
  return (
    <div id="profilepage-container" style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}>
      <Nav />
      <ProfileInfos />
      <SideInfo />
    </div>
  );
}

export default ProfilePages;
