import React from "react";
import WhoToFollow from "../who-to-follow/WhoToFollow";
import Card from "@material-ui/core/Card";
import "./who-to-follow-list.styles.scss";

function WhoToFollowList(props) {
  return (
    <div id="who-to-follow-list-container">
      <Card>
        {props.filteredUsers.map((user) => (
          <WhoToFollow key={user._id} follow={user} />
        ))}
      </Card>
    </div>
  );
}

export default WhoToFollowList;
