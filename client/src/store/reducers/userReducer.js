import { FETCH_USER } from "../actions/userActions";
import { FETCH_USERS } from "../actions/userActions";
import { UPDATE_FOLLOWING } from "../actions/userActions";
import { UPDATE_UNFOLLOWING } from "../actions/userActions";
import { UPDATE_PROFILE } from "../actions/userActions";
import { CLEAR_NOTIFICATIONS } from "../actions/userActions";
import { DARK } from "../actions/userActions";
import { FONT_SIZE } from "../actions/userActions";
import { COLOR_PICKER } from "../actions/userActions";

const userDefaultState = {
  userInfo: {},
  users: [],
  dark: localStorage.getItem("darkmode") === "dark" ? true : false,
  font: localStorage.getItem("fontsize"),
  color: localStorage.getItem("color"),
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
          following: [...state.userInfo.following, action.payload.followId],
        },
        users: state.users.map((user) =>
          user._id === action.payload.followId
            ? {
                ...user,
                followers: [...user.followers, action.payload.userId],
                notifications: [
                  ...user.notifications,
                  action.payload.notification,
                ],
              }
            : user
        ),
      };
    case UPDATE_UNFOLLOWING:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          following: state.userInfo.following.filter(
            (user) => user !== action.payload.followId
          ),
        },
        users: state.users.map((user) =>
          user._id === action.payload.followId
            ? {
                ...user,
                followers: user.followers.filter(
                  (user) => user !== action.payload.userId
                ),
              }
            : user
        ),
      };
    case UPDATE_PROFILE:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          profileImg: action.payload.profileImg,
          profileBackground: action.payload.profileBackground,
          location: action.payload.location,
          bio: action.payload.bio,
        },
      };
    case CLEAR_NOTIFICATIONS:
      return {
        ...state,
        userInfo: {
          ...state.userInfo,
          notifications: [],
        },
      };
    case DARK:
      return {
        ...state,
        dark: !action.payload,
      };
    case FONT_SIZE:
      return {
        ...state,
        font: action.payload,
      };
    case COLOR_PICKER:
      return {
        ...state,
        color: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
