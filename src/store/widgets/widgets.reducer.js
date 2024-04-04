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
    link: '/',
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

const loadWidgets = () => JSON.parse(localStorage.getItem("added-widgets")) || [];

const saveWidgets = widgets => localStorage.setItem('added-widgets',JSON.stringify(widgets));

const INITIAL_STATE = {
  addedWidgets: loadWidgets(),

  widgetsList: [...DEFAULT_WIDGETS,...loadWidgets(),ADD_BUTTON],

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
      icon: 'weather-icon',
      title: 'Overcast Clouds',
      name: 'weather',
      id: 5
    },

    {
      icon: 'sleep-icon',
      title: 'Sleep Mode',
      name: 'sleep-mode',
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
      id: 14
    },
  ],

  allService: [
    {
      icon: 'cleaning-icon',
      title: 'Cleaning Mode',
      name: 'cleaning-mode',
      link: '/cleaning-mode',
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
      id: 6
    },
  ],
}

export const widgetsReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;
  switch (type) {

    case WIDGETS_ACTION_TYPES.SET_ADDED_WIDGETS:
      const addedWidgets = [...state.addedWidgets,payload];
      const widgetsList = [...DEFAULT_WIDGETS,...addedWidgets,ADD_BUTTON];
      saveWidgets(addedWidgets);
      return {
        ...state,
        addedWidgets,
        widgetsList
      }
    default:
      return state;
  }
}
