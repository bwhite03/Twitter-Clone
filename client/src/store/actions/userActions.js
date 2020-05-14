import axios from "axios";
export const FETCH_DATA = "FETCH_DATA";

export const fetchData = () => {
  let data = {};
  return (dispatch) => {
    axios.get("/signedin").then((res) => (data = res));
    dispatch({
      type: FETCH_DATA,
      payload: data,
    });
  };
};
