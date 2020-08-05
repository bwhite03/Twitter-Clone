import userReducer from "./userReducer";
import tweetReducer from "./tweetReducer";
import messageReducer from "./messageReducer";
import { combineReducers } from "redux";

export default combineReducers({
  userReducer,
  tweetReducer,
  messageReducer,
});
