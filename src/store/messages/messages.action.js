import { MESSAGES_ACTION_TYPES } from "./messages.types";

export const setActiveMessage = (str) => {
  return { type: MESSAGES_ACTION_TYPES.SET_ACTIVE_MESSAGE,payload: str }
}

