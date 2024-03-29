import React from "react";
import { Link } from "react-router-dom";
import { Avatar } from "@material-ui/core";
import FollowButton from "../util/follow-button/FollowButton";
import UnfollowButton from "../util/unfollow-button/UnfollowButton";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import CircularProgress from "@material-ui/core/CircularProgress";
import { connect } from "react-redux";
import {
  updateFollowing,
  updateUnfollowing,
} from "../../store/actions/userActions";
import "./who-to-follow.styles.scss";

function WhoToFollow(props) {
  const id = {
    userId: props.userInfo._id,
    followId: props.follow._id,
    notification: {
      message: `${props.userInfo.username} is following you`,
      userId: props.userInfo._id,
    },
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
                <p style={{ padding: "0 5px" }}>{props.follow.username}</p>
                <p className="at-username">{props.follow.usernameAt}</p>
              </div>
            </div>
          </Link>
          {props.follow._id !== undefined ? (
            props.userInfo.following.includes(props.follow._id) ? (
              <UnfollowButton
                handleDelete={props.updateUnfollowing.bind(null, id)}
              />
            ) : (
              <FollowButton
                handleUpdate={props.updateFollowing.bind(null, id)}
              />
            )
          ) : (
            <CircularProgress />
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

export default connect(mapStateToProps, { updateFollowing, updateUnfollowing })(
  WhoToFollow
);
