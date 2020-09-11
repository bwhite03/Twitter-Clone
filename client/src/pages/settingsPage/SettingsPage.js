import React from "react";
import Nav from "../../components/nav/Nav";
import Settings from "../../components/settings/Settings";
import SideInfo from "../../components/side-info/SideInfo";

function SettingsPage() {
  return (
    <div
      id="settings-page-container"
      style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}
    >
      <Nav />
      <Settings />
      <SideInfo />
    </div>
  );
}

export default SettingsPage;
