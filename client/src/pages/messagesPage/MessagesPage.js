import React from "react";
import MessagesList from "../../components/messages-list/MessagesList";
import SideInfo from "../../components/side-info/SideInfo";
import Nav from "../../components/nav/Nav";

function MessagesPage() {
  return (
    <div id="message-page-container" style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}>
      <Nav />
      <MessagesList />
      <SideInfo />
    </div>
  );
}

export default MessagesPage;
