import { SET_ACTION_SLEEP_MODE } from "./sleep-mode.types";

export const setActiveDoorbellSetting = (title) => ({ type: SET_ACTION_SLEEP_MODE.SET_ACTIVE_DOORBELL_SETTING,payload: title });

export const setActiveVisitorCallSetting = (title) => ({ type: SET_ACTION_SLEEP_MODE.SET_ACTIVE_VISITOR_CALL_SETTING,payload: title })