import { TWEET } from "../actions/tweetActions";
import { FETCH_TWEETS } from "../actions/tweetActions";
import { COMMENT } from "../actions/tweetActions";

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
    default:
      return state;
  }
};

export default tweetReducer;
