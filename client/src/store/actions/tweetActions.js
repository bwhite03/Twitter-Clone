import axios from "axios";
export const TWEET = "TWEET";
export const FETCH_TWEETS = "FETCH_TWEETS";

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

// get tweets
export const fetchTweets = () => {
  return (dispatch) => {
    axios
      .get("/tweets")
      .then((res) => {
        dispatch({
          type: FETCH_TWEETS,
          payload: res.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
