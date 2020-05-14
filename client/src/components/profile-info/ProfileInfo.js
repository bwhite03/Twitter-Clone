import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ProfileDesign from "../profile-design/ProfileDesign";
import FollowButton from "../util/follow-button/FollowButton";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";
import { fetchData } from "../../store/actions/userActions";
import "./profile-info.styles.scss";

function ProfileInfo(props) {
  useEffect(() => {
    props.fetchData();
  }, []);

  return (
    <div id="profile-info-container">
      <Card variant="outlined">
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
          <div className="followers-container">
            <p className="following">
              <span>10</span> Following
            </p>
            <p className="followers">
              <span>100 </span> Followers
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.userInfo,
  };
};

export default connect(mapStateToProps, { fetchData })(ProfileInfo);
