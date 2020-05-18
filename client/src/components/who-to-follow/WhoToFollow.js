import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import FollowButton from "../util/follow-button/FollowButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import "./who-to-follow.styles.scss";

function WhoToFollow(props) {
  return (
    <div id="who-to-follow-container">
      <List component="nav" style={{ width: "100%" }}>
        <ListItem button style={{ justifyContent: "space-between" }}>
          <Link to={props.follow._id}>
            <div style={{ display: "flex" }}>
              <Avatar
                src={props.follow.profileImg}
                alt="userimg"
                sizes={"lg"}
              />
              <div className="follow-user-info-container">
                <p>{props.follow.username}</p>
                <p className="at-username">{props.follow.usernameAt}</p>
              </div>
            </div>
          </Link>
          <FollowButton />
        </ListItem>
        <Divider />
      </List>
    </div>
  );
}

export default WhoToFollow;
