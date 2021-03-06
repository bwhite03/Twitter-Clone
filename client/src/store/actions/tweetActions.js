import axios from "axios";
export const TWEET = "TWEET";
export const FETCH_TWEETS = "FETCH_TWEETS";
export const COMMENT = "COMMENT";
export const UPDATE_LIKES = "UPDATELIKES";
export const UPDATE_UNLIKES = "UPDATEUNLIKES";
export const UPDATE_RETWEETS = "UPDATE_RETWEETS";
export const DELETE_TWEET = "DELETE_TWEET";

// post tweet
export const tweet = (data) => {
  return (dispatch) => {
    axios
      .post("/tweet", {
        content: data.content,
        username: data.username,
        userid: data.userid,
        profileImg: data.profileImg,
        retweetContent: data.retweetContent,
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

// add comment to tweet
export const comment = (data) => {
  return (dispatch) => {
    axios
      .put(`/comment/${data.id}`, {
        content: data.content,
        username: data.username,
        profileImg: data.profileImg,
        tweetid: data._id,
        userid: data.userid,
        id: data.id,
        notification: data.notification,
      })
      .then(() => {
        dispatch({
          type: COMMENT,
          payload: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// like tweet
export const updateLikes = (data) => {
  return (dispatch) => {
    axios
      .put(`/updatelikes/${data.tweetId}`, {
        user: data.userId,
      })
      .then(() => {
        dispatch({
          type: UPDATE_LIKES,
          payload: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// unlike tweet
export const updateUnlikes = (data) => {
  return (dispatch) => {
    axios
      .put(`/updateunlikes/${data.tweetId}`, {
        user: data.userId,
      })
      .then(() => {
        dispatch({
          type: UPDATE_UNLIKES,
          payload: data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// update retweet count
export const updateRetweet = (id) => {
  return (dispatch) => {
    axios
      .put(`/updateretweet/${id.tweetId}`, {
        user: id.userId,
      })
      .then(() => {
        dispatch({
          type: UPDATE_RETWEETS,
          payload: id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// delete tweet
export const deleteTweet = (id) => {
  return (dispatch) => {
    axios
      .delete(`/deletetweet/${id}`, {})
      .then(() => {
        dispatch({
          type: DELETE_TWEET,
          payload: id,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
