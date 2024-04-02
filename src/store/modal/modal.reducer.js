import { MODAL_ACTIVE_TYPES } from "./modal.types";

const INITIAL_STATE = {
  title: null,
  isShow: false
}

export const modalReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;
  switch (type) {
    case MODAL_ACTIVE_TYPES.SET_MODAL_TITLE:
      return {
        ...state,
        ...payload,
      }
    case MODAL_ACTIVE_TYPES.SET_MODAL_IS_SHOW:
      return {
        ...state,
        isShow: payload,
      }
    default:
      return state;
  }
}
