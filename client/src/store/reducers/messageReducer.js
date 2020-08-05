import { CREATE_MESSAGE } from "../actions/messageActions";

const userDefaultState = {
  messages: [],
};

const messageReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case CREATE_MESSAGE:
      return { ...state, messages: action.payload };
    default:
      return state;
  }
};

export default messageReducer;
