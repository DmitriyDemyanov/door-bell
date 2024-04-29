import { TRANSFERS_ACTION_TYPES } from './transfers.types';

export const setShowModalTransfer = (bool) => ({ type: TRANSFERS_ACTION_TYPES.SET_SHOW_MODAL,payload: bool });