import { CREATE_MESSAGE } from "../actions/messageActions";
import { FETCH_MESSAGES } from "../actions/messageActions";

const userDefaultState = {
  messages: [],
};

const messageReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return { ...state, messages: action.payload };
    case CREATE_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    default:
      return state;
  }
};

export default messageReducer;
