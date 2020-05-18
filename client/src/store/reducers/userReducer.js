import { FETCH_USER } from "../actions/userActions";
import { FETCH_USERS } from "../actions/userActions";

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
    default:
      return state;
  }
};

export default userReducer;
