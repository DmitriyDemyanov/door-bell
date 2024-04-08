import { LANGUAGES_ACTION_TYPES } from "./languages.types";

const INITIAL_STATE = {
  languages: [
    {
      title: 'English',
      id: 'l-english',
      type: 'language'
    },
    {
      title: 'Deutsch',
      id: 'l-deutsch',
      type: 'language'
    },
    {
      title: 'Español',
      id: 'l-espanol',
      type: 'language'
    },
    {
      title: 'Français',
      id: 'l-francais',
      type: 'language'
    },
    {
      title: 'Italiano',
      id: 'l-italiano',
      type: 'language'
    },
  ],
  currentLanguage: {
    title: 'English',
    id: 'l-english',
    type: 'language'
  }
};


export const languagesReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;

  switch (type) {
    case LANGUAGES_ACTION_TYPES.SET_CURRENT_LANGUAGE:
      return {
        ...state,
        currentLanguage: payload
      }
    default:
      return state;
  }
} 