import React from "react";
import MessageList from "../../components/message-list/MessageList";
import SideInfo from "../../components/side-info/SideInfo";
import Nav from "../../components/nav/Nav";

function MessagePage() {
  return (
    <div id="message-page-container" style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" }}>
      <Nav />
      <MessageList style={{ alignSelf: "center" }} />
      <SideInfo />
    </div>
  );
}

export default MessagePage;
