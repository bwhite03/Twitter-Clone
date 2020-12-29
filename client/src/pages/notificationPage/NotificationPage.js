import React from "react";
import NotificationList from "../../components/notification-list/NotificationList";
import SideInfo from "../../components/side-info/SideInfo";
import Nav from "../../components/nav/Nav";

function NotificationPage() {
  return (
    <div id="notification-page-container" style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}>
      <Nav />
      <NotificationList />
      <SideInfo />
    </div>
  );
}

export default NotificationPage;
