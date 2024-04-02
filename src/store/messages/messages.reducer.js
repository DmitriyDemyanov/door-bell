import { MESSAGES_ACTION_TYPES } from "./messages.types";

const INITIAL_STATE = {
  allMessages: [
    'Clean my room',
    'Do not disturb',
    'Do not enter',
    'Out of Services',
    'Closed',
    'Opened'
  ],

  activeMessage: '',
}

export const messagesReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;

  switch (type) {

    case MESSAGES_ACTION_TYPES.SET_ACTIVE_MESSAGE:

      return {
        ...state,
        activeMessage: payload,
      }
    default:
      return state;
  }

}