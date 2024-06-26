import { loadFromLS,saveToLS } from "../../utils/localStorage.util";
import { WIDGETS_ACTION_TYPES } from "./widgets.types";

const DEFAULT_WIDGETS = [
  {
    icon: 'cameras-icon',
    title: 'cameras',
    link: '/cameras',
    id: 'w-cameras',
    status: 'default'

  },
  {
    icon: 'services-icon',
    title: 'services',
    link: '/services',
    id: 'w-services',
    status: 'default'
  },
  {
    icon: 'message-icon',
    title: 'message',
    link: 'message',
    id: 'w-message',
    status: 'default'
  },
];
const ADD_BUTTON = {
  icon: 'plus-icon',
  title: '',
  link: 'add-widget',
  id: 'add-button'
};

const INITIAL_STATE = {
  addedWidgets: loadFromLS('added-widgets') || [],

  widgetsList: [...DEFAULT_WIDGETS,...loadFromLS('added-widgets') || [],ADD_BUTTON],

  footerWidgets: [
    {
      icon: 'in-call-icon',
      title: 'View Calls'

    },
    {
      icon: 'leave-icon',
      title: 'Leave'
    },
    {
      icon: 'lock-icon',
      title: 'Unlock Door'
    },

  ],
  allSettings: [
    {
      icon: 'weather-sun-icon',
      title: 'weather',
      name: 'weather',
      forecast: 'Overcast Clouds Overcast Clo',
      temp: '38',
      link: 'weather',
      id: 5
    },

    {
      icon: 'sleep-icon',
      title: 'sleep Mode',
      name: 'sleep-mode',
      link: '/services/set-sleep-mode',
      id: 7
    },
    {
      icon: 'audio-icon',
      title: 'Audio',
      name: 'audio',
      id: 8
    },
    {
      icon: 'user-icon',
      title: 'User',
      name: 'user',
      id: 9
    },

    {
      icon: 'info-icon',
      title: 'Information',
      name: 'information',
      id: 11
    },

    {
      icon: 'system-icon',
      title: 'System',
      name: 'system',
      id: 13
    },
    {
      icon: 'language-icon',
      title: 'Language',
      name: 'language',
      link: '/main-settings/languages',
      id: 14
    },
  ],

  allService: [
    {
      icon: 'cleaning-icon',
      title: 'Cleaning Mode',
      name: 'cleaning-mode',
      link: '/services/cleaning-mode',
      id: 10
    },
    {
      icon: 'doors-icon',
      title: 'Doors',
      name: 'doors',
      id: 12
    },
    {
      icon: 'transfers-icon',
      title: 'Transfers',
      name: 'transfers',
      link: '/services/transfers',
      id: 6
    },
  ],
}

export const widgetsReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;
  switch (type) {

    case WIDGETS_ACTION_TYPES.SET_ADDED_WIDGETS:
      const addedWidgets = [...state.addedWidgets,payload];

      let widgetsList = [];
      if (state.allSettings.length + state.allService.length > addedWidgets.length) {
        widgetsList = [...DEFAULT_WIDGETS,...addedWidgets,ADD_BUTTON];
      }
      else {
        widgetsList = [...DEFAULT_WIDGETS,...addedWidgets];
      }

      saveToLS('added-widgets',addedWidgets);
      return {
        ...state,
        addedWidgets,
        widgetsList
      }
    default:
      return state;
  }
}
