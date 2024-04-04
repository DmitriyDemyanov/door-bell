import { MODAL_ACTIVE_TYPES } from "./modal.types";

export const setModalTitle = item => {
  const payload = {
    title: item.stringTitle,
    isShow: Boolean(item),
    type: item.type,
  };
  return {
    payload,
    type: MODAL_ACTIVE_TYPES.SET_MODAL_SETTINGS
  }
}

export const setIsShow = payload => ({
  payload,
  type: MODAL_ACTIVE_TYPES.SET_MODAL_IS_SHOW
})
