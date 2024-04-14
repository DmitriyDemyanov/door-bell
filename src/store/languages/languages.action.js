
import { LANGUAGES_ACTION_TYPES } from "./languages.types";

export const setCurrentLanguage = (item) => ({ type: LANGUAGES_ACTION_TYPES.SET_CURRENT_LANGUAGE, payload:item })