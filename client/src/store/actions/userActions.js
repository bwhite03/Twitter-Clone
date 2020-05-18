import axios from "axios";
export const FETCH_USER = "FETCH_USER";
export const FETCH_USERS = "FETCH_USERS";

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
