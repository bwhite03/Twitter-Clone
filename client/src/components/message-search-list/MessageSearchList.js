import React from "react";
import MessageSearch from "../message-search/MessageSearch";
import Card from "@material-ui/core/Card";

function MessageSearchList(props) {
  return (
    <div id="message-search-list-container">
      <Card>
        {props.filteredUsers.map((user) => (
          <MessageSearch
            key={user._id}
            user={user}
            setUser={props.setUser}
            setSearch={props.setSearch}
          />
        ))}
      </Card>
    </div>
  );
}

export default MessageSearchList;
