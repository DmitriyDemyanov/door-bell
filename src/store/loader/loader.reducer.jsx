import { LOADER_ACTION_TYPES } from "./loader.types";

const INITIAL_STATE = {
  isShowLoader: false,
};

export const loaderReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;
  
  switch (type) {
    case LOADER_ACTION_TYPES.SET_SHOW_LOADER:
      return {
        ...state,
        isShowLoader: payload
      }
    default:
      return state;
  }
};