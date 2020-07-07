import axios from "axios";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USERS = "FETCH_USERS";
export const UPDATE_FOLLOWING = "UPDATE_FOLLOWING";
export const UPDATE_UNFOLLOWING = "UPDATE_UNFOLLOWING";

export const fetchUser = () => {
  const token = localStorage.getItem("auth-token");
  return (dispatch) => {
    axios
      .get("/signedin", { headers: { Authorization: token } })
      .then((res) => {
        dispatch({
          type: FETCH_USER,
          payload: res.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const fetchUsers = () => {
  return (dispatch) => {
    axios
      .get("/users")
      .then((res) => {
        dispatch({
          type: FETCH_USERS,
          payload: res.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const updateFollowing = (id) => {
  return (dispatch) => {
    axios
      .put(`/updatefollowing/${id.userId}`, {
        user: id.followId,
        follower: id.userId,
      })
      .then(() => {
        dispatch({
          type: UPDATE_FOLLOWING,
          payload: id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const updateUnfollowing = (id) => {
  return (dispatch) => {
    axios
      .put(`/updateunfollowing/${id.userId}`, {
        user: id.followId,
        follower: id.userId,
      })
      .then(() => {
        dispatch({
          type: UPDATE_UNFOLLOWING,
          payload: id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
