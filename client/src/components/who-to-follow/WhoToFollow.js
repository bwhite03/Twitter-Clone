import React from "react";
import { Avatar } from "@material-ui/core";
import FollowButton from "../util/follow-button/FollowButton";
import "./who-to-follow.styles.scss";

function WhoToFollow(props) {
  return (
    <div id="who-to-follow-container">
      <div className="follow-info-container">
        <div className="follow-img-container">
          <Avatar src={props.follow.profileImg} alt="userimg" sizes={"lg"} />
        </div>
        <div className="follow-user-info-container">
          <p>{props.follow.username}</p>
          <p className="at-username">{props.follow.usernameAt}</p>
        </div>
      </div>
      <FollowButton />
    </div>
  );
}

export default WhoToFollow;
