import axios from "axios";
export const TWEET = "TWEET";

// post tweet
export const tweet = (data) => {
  return (dispatch) => {
    axios
      .post("/tweet", {
        content: data.content,
        username: data.username,
        userid: data.userid,
        profileImg: data.profileImg,
      })
      .then(() => {
        dispatch({
          type: TWEET,
          payload: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
