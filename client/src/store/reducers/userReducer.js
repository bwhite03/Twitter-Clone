import { FETCH_DATA } from "../actions/userActions";

const userDefaultState = {
  userInfo: {},
};

const userReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return { ...state, userInfo: action.payload };
    default:
      return state;
  }
};

export default userReducer;
