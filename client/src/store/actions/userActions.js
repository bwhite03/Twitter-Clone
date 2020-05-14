import axios from "axios";
export const FETCH_DATA = "FETCH_DATA";

export const fetchData = () => {
  const token = localStorage.getItem("auth-token");
  return (dispatch) => {
    axios
      .get("/signedin", { headers: { Authorization: token } })
      .then((res) => {
        dispatch({
          type: FETCH_DATA,
          payload: res.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
