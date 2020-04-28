import React from "react";
import { Link } from "react-router-dom";
import ProfileDesign from "../profile-design/ProfileDesign";
import FollowButton from "../util/follow-button/FollowButton";
import "./profile-info.styles.scss";

function ProfileInfo() {
  return (
    <div id="profile-info-container">
      <div className="profile-info-nav">
        <Link to="/">
          <i className="fas fa-arrow-left"></i>
        </Link>
        <h1>Blake</h1>
      </div>
      <ProfileDesign />
      <div className="profile-info-bio">
        <div className="button">
          <FollowButton />
        </div>
        <h1>Blake</h1>
        <p className="atUsername">@Blake</p>
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
          September 2007
        </p>
      </div>
    </div>
  );
}

export default ProfileInfo;
