import { MODAL_ACTIVE_TYPES } from "./modal.types";

const INITIAL_STATE = {
  modalCommonInfo: null,
}


export const modalReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;
  switch (type) {
    case MODAL_ACTIVE_TYPES.SET_MODAL_COMMON_INFO:
      return {
        ...state,
        modalCommonInfo: payload,
      }
    default:
      return state;
  }
}

