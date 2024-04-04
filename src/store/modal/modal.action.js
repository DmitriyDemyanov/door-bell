import { MODAL_ACTIVE_TYPES } from "./modal.types";

export const setModalTitle = title => {
  const payload = {
    title,
    isShow: Boolean(title)
  };
  return {
    payload,
    type: MODAL_ACTIVE_TYPES.SET_MODAL_TITLE
  }
}

export const setIsShow = payload => ({
  payload,
  type: MODAL_ACTIVE_TYPES.SET_MODAL_IS_SHOW
})
