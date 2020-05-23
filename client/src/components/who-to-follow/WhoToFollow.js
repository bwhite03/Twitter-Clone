import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import FollowButton from "../util/follow-button/FollowButton";
import UnfollowButton from "../util/unfollow-button/UnfollowButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import axios from "axios";
import "./who-to-follow.styles.scss";

function WhoToFollow(props) {
  const handleUpdate = () => {
    axios
      .put(`/updatefollowing/${props.userInfo._id}`, {
        user: props.follow._id,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleDelete = () => {
    axios
      .put(`/updateunfollowing/${props.userInfo._id}`, {
        user: props.follow._id,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div id="who-to-follow-container">
      <List component="nav" style={{ width: "100%" }}>
        <ListItem button style={{ justifyContent: "space-between" }}>
          <Link to={props.follow._id}>
            <div style={{ display: "flex" }}>
              {props.follow.profileImg ? (
                <Avatar
                  src={props.follow.profileImg}
                  alt="userimg"
                  sizes={"lg"}
                />
              ) : (
                <Avatar alt="userimg" sizes={"lg"}>
                  {props.follow.username.charAt(0).toUpperCase()}
                </Avatar>
              )}
              <div className="follow-user-info-container">
                <p>{props.follow.username}</p>
                <p className="at-username">{props.follow.usernameAt}</p>
              </div>
            </div>
          </Link>
          {props.userInfo.following.includes(props.follow._id) ? (
            <UnfollowButton handleDelete={handleDelete} />
          ) : (
            <FollowButton handleUpdate={handleUpdate} />
          )}
        </ListItem>
        <Divider />
      </List>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.userInfo,
  };
};

export default connect(mapStateToProps)(WhoToFollow);
