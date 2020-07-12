import { FETCH_USER } from "../actions/userActions";
import { FETCH_USERS } from "../actions/userActions";
import { UPDATE_FOLLOWING } from "../actions/userActions";
import { UPDATE_UNFOLLOWING } from "../actions/userActions";
import { UPDATE_PROFILE } from "../actions/userActions";

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
          following: [...state.userInfo.following, action.payload.followId],
        },
        users: state.users.map((user) =>
          user._id === action.payload.followId
            ? { ...user, followers: [...user.followers, action.payload.userId] }
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
    default:
      return state;
  }
};

export default userReducer;
