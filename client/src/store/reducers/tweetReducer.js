import { TWEET } from "../actions/tweetActions";
import { FETCH_TWEETS } from "../actions/tweetActions";

const userDefaultState = {
  tweets: [],
};

const tweetReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case FETCH_TWEETS:
      return { ...state, tweets: action.payload };
    case TWEET:
      return { ...state, tweets: [...state.tweets, action.payload] };
    default:
      return state;
  }
};

export default tweetReducer;
