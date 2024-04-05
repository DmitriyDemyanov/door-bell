import { loadFromLS, saveToLS } from "../../utils/localStorage.util";


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

  activeMessage: loadFromLS('active-message'),
}

export const messagesReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;

  switch (type) {
    case MESSAGES_ACTION_TYPES.SET_ACTIVE_MESSAGE:
      saveToLS('active-message',payload);
      return {
        ...state,
        activeMessage: payload,
      }
    default:
      return state;
  }
}
