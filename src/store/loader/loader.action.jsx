import { LOADER_ACTION_TYPES } from "./loader.types";

export const setShowLoader = (bool) => ({ type: LOADER_ACTION_TYPES.SET_SHOW_LOADER,payload: bool });