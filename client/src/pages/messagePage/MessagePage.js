import React from "react";
import MessageList from "../../components/message-list/MessageList";

function MessagePage() {
  return (
    <div id="message-page-container">
      <MessageList style={{ alignSelf: "center" }} />
    </div>
  );
}

export default MessagePage;
