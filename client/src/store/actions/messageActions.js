import axios from "axios";
export const CREATE_MESSAGE = "CREATE_MESSAGE";
export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";

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

export const sendMessage = (data) => {
  return (dispatch) => {
    axios
      .put(`/message/${data.id}`, {
        message: data.message,
        username: data.username,
        avatar: data.avatar,
      })
      .then(() => {
        dispatch({
          type: SEND_MESSAGE,
          payload: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const deleteMessage = (id) => {
  return (dispatch) => {
    axios
      .delete(`/deletemessage/${id}`, {})
      .then(() => {
        dispatch({
          type: DELETE_MESSAGE,
          payload: id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
