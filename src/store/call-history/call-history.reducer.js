import { SET_ACTION_CALL_HISTORY } from "./call-history.types";

const INITIAL_STATE = {
  allCleanupInterval: {
    title: 'Set Cleanup Interval',
    setting: ['12 Hours','24 Hours','1 Week','1 month'],
  },
  activeCleanupInterval: '24 Hours', //str
};

export const callHistoryReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;

  switch (type) {
    case SET_ACTION_CALL_HISTORY.SET_ACTIVE_CLEANUP_HISTORY:
      return {
        ...state,
        activeCleanupInterval: payload,
      }
    default:
      return state;
  }
};