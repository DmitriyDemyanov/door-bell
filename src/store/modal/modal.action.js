import { MODAL_ACTIVE_TYPES } from "./modal.types";

export const setModalCommonInfo = (payload) => ({
  payload,
  type: MODAL_ACTIVE_TYPES.SET_MODAL_COMMON_INFO
});