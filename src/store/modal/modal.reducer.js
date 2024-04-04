import { MODAL_ACTIVE_TYPES } from "./modal.types";

const INITIAL_STATE = {
  modalSettings: null,
  isShow: false,
  type: null,

}

export const modalReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;
  switch (type) {
    case MODAL_ACTIVE_TYPES.SET_MODAL_SETTINGS:
      return {
        ...state,
        modalSettings: payload,
        isShow: payload.isShow
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
