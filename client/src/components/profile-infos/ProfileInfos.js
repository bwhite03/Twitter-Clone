import React from "react";
import { Link, useParams } from "react-router-dom";
import ProfileDesigns from "../profile-designs/ProfileDesigns";
import FollowButton from "../util/follow-button/FollowButton";
import UnfollowButton from "../util/unfollow-button/UnfollowButton";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";
import {
  updateFollowing,
  updateUnfollowing,
} from "../../store/actions/userActions";
import moment from "moment";
import "./profile-infos.styles.scss";

function ProfileInfos(props) {
  // get correct user params
  let { id } = useParams();
  let currentUser = props.users.filter((user) => user._id === id);
  currentUser = currentUser[0];

  const idd = {
    userId: props.userInfo._id,
    followId: currentUser._id,
    notification: {
      message: `${props.userInfo.username} is following you`,
      userId: props.userInfo._id,
    },
  };

  return (
    <div id="profile-info-container">
      <Card variant="outlined">
        <div className="profile-info-nav">
          <Link to="/">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h1>{currentUser.username}</h1>
        </div>
        <ProfileDesigns currentUser={currentUser} />
        <div className="profile-info-bio">
          <div className="button">
            {props.userInfo.following.includes(currentUser._id) ? (
              <UnfollowButton
                handleDelete={props.updateUnfollowing.bind(null, idd)}
              />
            ) : (
              <FollowButton
                handleUpdate={props.updateFollowing.bind(null, idd)}
              />
            )}
          </div>
          <h1>{currentUser.username}</h1>
          <p className="atUsername">@{currentUser.username}</p>
          <p className="bio">{currentUser.bio}</p>
          {currentUser.location ? (
            <p className="location">
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              {currentUser.location}
            </p>
          ) : (
            <p className="location">
              <span>
                <i className="fas fa-map-marker-alt"></i>
              </span>
              Private
            </p>
          )}
          <p className="joined">
            <span>
              <i className="fas fa-calendar-alt"></i>
            </span>
            {moment(currentUser.dateCreated).calendar()}
          </p>
          <div className="followers-container">
            <p className="following">
              <span>{currentUser.following.length}</span> Following
            </p>
            <p className="followers">
              <span>{currentUser.followers.length}</span> Followers
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
    userInfo: state.userReducer.userInfo,
  };
};

export default connect(mapStateToProps, { updateFollowing, updateUnfollowing })(
  ProfileInfos
);
