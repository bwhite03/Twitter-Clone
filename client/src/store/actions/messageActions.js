import axios from "axios";
export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const FETCH_MESSAGES = "FETCH_MESSAGES";

export const fetchMessages = () => {
  return (dispatch) => {
    axios
      .get("/messages")
      .then((res) => {
        dispatch({
          type: FETCH_MESSAGES,
          payload: res.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const createMessage = (data) => {
  return (dispatch) => {
    axios
      .post("/createmessages/", {
        senderInfo: data.senderInfo,
        receiverInfo: data.receiverInfo,
        message: data.message,
      })
      .then(() => {
        dispatch({
          type: CREATE_MESSAGE,
          payload: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
