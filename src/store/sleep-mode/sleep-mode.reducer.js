import { SET_ACTION_SLEEP_MODE } from "./sleep-mode.types";

const INITIAL_STATE = {
  activeDoorbellSetting: 'Bell',
  activeVisitorCallSetting: 'Bell',
} 

export const sleepModeReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;
  switch (type) {
    case SET_ACTION_SLEEP_MODE.SET_ACTIVE_DOORBELL_SETTING: 
      return {
        ...state,
        activeDoorbellSetting:payload
      }
    case SET_ACTION_SLEEP_MODE.SET_ACTIVE_VISITOR_CALL_SETTING:
      return {
        ...state,
        activeVisitorCallSetting: payload
      }
    default:
      return state;  
  }
}