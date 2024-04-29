
import { SET_ACTION_SLEEP_MODE } from "./sleep-mode.types";

export const setActiveDoorbellSetting = (title) => ({ type: SET_ACTION_SLEEP_MODE.SET_ACTIVE_DOORBELL_SETTING,payload: title });

export const setActiveVisitorCallSetting = (title) => ({ type: SET_ACTION_SLEEP_MODE.SET_ACTIVE_VISITOR_CALL_SETTING,payload: title });

export const setShowSleepModal = (bool) => ({ type: SET_ACTION_SLEEP_MODE.SET_SHOW_SLEEP_MODAL,payload: bool });

export const setSleepModeTimer = (num) => ({ type: SET_ACTION_SLEEP_MODE.SET_SLEEP_MODE_TIMER, payload:num})