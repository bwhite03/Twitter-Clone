import axios from "axios";
export const CREATE_MESSAGE = "CREATE_MESSAGE";

// TODO: do redux
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
