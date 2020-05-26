import { FETCH_USER } from "../actions/userActions";
import { FETCH_USERS } from "../actions/userActions";
import { UPDATE_FOLLOWING } from "../actions/userActions";
import { UPDATE_UNFOLLOWING } from "../actions/userActions";

const userDefaultState = {
  userInfo: {},
  users: [],
};

const userReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case FETCH_USER:
      return { ...state, userInfo: action.payload };
    case FETCH_USERS:
      return { ...state, users: action.payload };
    case UPDATE_FOLLOWING:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          following: [...state.userInfo.following, action.payload],
        },
      };
    case UPDATE_UNFOLLOWING:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          following: state.userInfo.following.filter(
            (user) => user !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default userReducer;
