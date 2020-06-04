import userReducer from "./userReducer";
import tweetReducer from "./tweetReducer";
import { combineReducers } from "redux";

export default combineReducers({
  userReducer,
  tweetReducer,
});
