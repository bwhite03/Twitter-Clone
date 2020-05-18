import React, { useState } from "react";
import WhoToFollow from "../who-to-follow/WhoToFollow";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";
import "./who-to-follow-list.styles.scss";

function WhoToFollowList(props) {
  const { users } = props;

  return (
    <div id="who-to-follow-list-container">
      <Card>
        {users.map((user) => (
          <WhoToFollow key={user._id} follow={user} />
        ))}
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.userReducer.users,
  };
};

export default connect(mapStateToProps)(WhoToFollowList);
