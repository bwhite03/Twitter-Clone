import React, { useState } from "react";
import WhoToFollow from "../who-to-follow/WhoToFollow";
import "./who-to-follow-list.styles.scss";

function WhoToFollowList() {
  const [state, setState] = useState([
    {
      id: 1,
      profileImg:
        "https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?cs=srgb&dl=selective-focus-photography-of-woman-1239288.jpg&fm=jpg",
      username: "Kayla",
      usernameAt: "@Kayla",
    },
    {
      id: 2,
      profileImg:
        "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      username: "Blake",
      usernameAt: "@Blake",
    },
  ]);
  return (
    <div id="who-to-follow-list-container">
      {state.map((follow) => (
        <WhoToFollow key={follow.id} follow={follow} />
      ))}
    </div>
  );
}

export default WhoToFollowList;
