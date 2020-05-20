import React from "react";
import { Avatar } from "@material-ui/core";
import "./profile-design.styles.scss";

function ProfileDesign(props) {
  return (
    <div id="profile-design-container">
      <div className="profile-info-design">
        {props.userInfo.profileImg ? (
          <Avatar src={props.userInfo.profileImg} alt="userimg" sizes={"lg"} />
        ) : (
          <Avatar alt="userimg" sizes={"lg"}>
            {props.userInfo.username.charAt(0).toUpperCase()}
          </Avatar>
        )}
      </div>
    </div>
  );
}

export default ProfileDesign;
