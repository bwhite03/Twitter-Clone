import React from "react";
import Notification from "../notification/Notification";
import { connect } from "react-redux";

function NotificationList(props) {
  return (
    <div id="notification-list-container">
      {props.userInfo.notifications.map((notification, index) => (
        <Notification key={index} notification={notification} />
      ))}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.userReducer.userInfo,
  };
};

export default connect(mapStateToProps)(NotificationList);
