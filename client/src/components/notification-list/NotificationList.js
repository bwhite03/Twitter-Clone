import React from "react";
import { Link } from "react-router-dom";
import Notification from "../notification/Notification";
import Card from "@material-ui/core/Card";
import ClearNotificationsButton from "../util/clear-notifications-button/ClearNotificationsButton";
import { connect } from "react-redux";
import { clearNotifications } from "../../store/actions/userActions";
import "./notification-list.styles.scss";

function NotificationList(props) {
  const data = {
    userId: props.userInfo._id,
  };

  // clear notifications
  const clearNotifications = () => {
    props.clearNotifications(data);
  };

  return (
    <div id="notification-list-container">
      <Card variant="outlined">
        <div className="notification-list-nav">
          <Link to="/">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <h1 style={{ alignSelf: "center" }}>Notifications</h1>
          <div style={{ marginLeft: "auto" }}>
            <ClearNotificationsButton clearNotifications={clearNotifications} />
          </div>
        </div>
        {props.userInfo.notifications.map((notification, index) => (
          <Notification key={index} notification={notification} />
        ))}
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.userInfo,
  };
};

export default connect(mapStateToProps, { clearNotifications })(
  NotificationList
);
