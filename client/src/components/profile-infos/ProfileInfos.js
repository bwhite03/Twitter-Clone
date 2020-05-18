import React from "react";
import { Link, useParams } from "react-router-dom";
import ProfileDesign from "../profile-design/ProfileDesign";
import FollowButton from "../util/follow-button/FollowButton";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";
import moment from "moment";
import "./profile-infos.styles.scss";

function ProfileInfos(props) {
  // get correct user params
  let { id } = useParams();
  let currentUser = props.users.filter((user) => user._id === id);
  currentUser = currentUser[0];

  return (
    <div id="profile-info-container">
      <Card variant="outlined">
        <div className="profile-info-nav">
          <Link to="/">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h1>{currentUser.username}</h1>
        </div>
        <ProfileDesign />
        <div className="profile-info-bio">
          <div className="button">
            <FollowButton />
          </div>
          <h1>{currentUser.username}</h1>
          <p className="atUsername">@{currentUser.username}</p>
          <p className="bio">
            Educating and inspiring people to create, publish and flourish by
            designing life and business for happiness and fulfillment.
          </p>
          <p className="location">
            <span>
              <i className="fas fa-map-marker-alt"></i>
            </span>
            San Diego, California
          </p>
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
  };
};

export default connect(mapStateToProps)(ProfileInfos);
