import { TWEET } from "../actions/tweetActions";

const userDefaultState = {
  tweets: [],
};

const tweetReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case TWEET:
      return { ...state, tweets: [...state.tweets, action.payload] };
    default:
      return state;
  }
};

export default tweetReducer;
