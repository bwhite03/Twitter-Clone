import React from "react";
import { Avatar } from "@material-ui/core";
import "./profile-designs.styles.scss";

function ProfileDesigns(props) {
  return (
    <div id="profile-design-container">
      <div className="profile-info-design">
        {props.currentUser.profileImg ? (
          <Avatar
            src={props.currentUser.profileImg}
            alt="userimg"
            sizes={"lg"}
          />
        ) : (
          <Avatar alt="userimg" sizes={"lg"}>
            {props.currentUser.username.charAt(0).toUpperCase()}
          </Avatar>
        )}
      </div>
    </div>
  );
}

export default ProfileDesigns;
