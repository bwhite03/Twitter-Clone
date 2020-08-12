import { CREATE_MESSAGE } from "../actions/messageActions";
import { FETCH_MESSAGES } from "../actions/messageActions";
import { SEND_MESSAGE } from "../actions/messageActions";
import { DELETE_MESSAGE } from "../actions/messageActions";

const userDefaultState = {
  messages: [],
};

const messageReducer = (state = userDefaultState, action) => {
  switch (action.type) {
    case FETCH_MESSAGES:
      return { ...state, messages: action.payload };
    case CREATE_MESSAGE:
      return { ...state, messages: [...state.messages, action.payload] };
    case SEND_MESSAGE:
      return {
        ...state,
        messages: state.messages.map((message) =>
          message._id === action.payload.id
            ? { ...message, messages: [...message.messages, action.payload] }
            : message
        ),
      };
    case DELETE_MESSAGE:
      return {
        ...state,
        messages: state.messages.map((message) =>
          message._id === action.payload
            ? {
                ...message,
                messages: message.messages.filter(
                  (message) => message !== action.payload
                ),
              }
            : message
        ),
      };
    default:
      return state;
  }
};

export default messageReducer;
