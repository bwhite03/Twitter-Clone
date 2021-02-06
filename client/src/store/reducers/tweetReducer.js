import { TWEET } from "../actions/tweetActions";
import { FETCH_TWEETS } from "../actions/tweetActions";
import { COMMENT } from "../actions/tweetActions";
import { UPDATE_LIKES } from "../actions/tweetActions";
import { UPDATE_UNLIKES } from "../actions/tweetActions";
import { UPDATE_RETWEETS } from "../actions/tweetActions";
import { DELETE_TWEET } from "../actions/tweetActions";

const userDefaultState = {
  tweets: [],
};

const tweetReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case FETCH_TWEETS:
      return { ...state, tweets: action.payload };
    case TWEET:
      return { ...state, tweets: [...state.tweets, action.payload] };
    case COMMENT:
      return {
        ...state,
        tweets: state.tweets.map((tweet) =>
          tweet._id === action.payload.id
            ? { ...tweet, comments: [...tweet.comments, action.payload] }
            : tweet
        ),
      };
    case UPDATE_LIKES:
      return {
        ...state,
        tweets: state.tweets.map((tweet) =>
          tweet._id === action.payload.tweetId
            ? { ...tweet, likes: [...tweet.likes, action.payload.userId] }
            : tweet
        ),
      };
    case UPDATE_UNLIKES:
      return {
        ...state,
        tweets: state.tweets.map((tweet) =>
          tweet._id === action.payload.tweetId
            ? {
                ...tweet,
                likes: tweet.likes.filter(
                  (user) => user !== action.payload.userId
                ),
              }
            : tweet
        ),
      };
    case UPDATE_RETWEETS:
      return {
        ...state,
        tweets: state.tweets.map((tweet) =>
          tweet._id === action.payload.tweetId
            ? { ...tweet, retweets: [...tweet.retweets, action.payload.userId] }
            : tweet
        ),
      };
    case DELETE_TWEET:
      return {
        ...state,
        tweets: state.tweets.filter((tweet) => tweet._id !== action.payload),
      };
    default:
      return state;
  }
};

export default tweetReducer;
