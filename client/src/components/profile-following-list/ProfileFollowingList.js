import React from "react";
import Card from "@material-ui/core/Card";
import WhoToFollow from "../who-to-follow/WhoToFollow";
import { connect } from "react-redux";
import './profile-following-list.styles.scss';

function ProfileFollowingList(props) {
  const filteredUsers = props.users.filter((user) => {
    return props.userInfo.following.includes(user._id);
  });

  return (
    <div id="profile-following-list-container">
      <Card>
        {filteredUsers.map((user) => (
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

export default connect(mapStateToProps)(ProfileFollowingList);
