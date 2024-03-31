import { WIDGETS_ACTION_TYPES } from "./widgets.types";

const localStorMainWidgets = JSON.parse(localStorage.getItem('main-widgets'));

const INITIAL_STATE = {
  widgetsFooter: [
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
  widgetsMain: [
    {
      icon: 'cameras-icon',
      title: 'cameras',
      link: '/add-widget',
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
      link: '/',
      id: 'w-message',
      status: 'default'
    },
  ],
  renderWidgets: localStorMainWidgets || [],
  allSettings: [
    {
      icon: 'weather-icon',
      title: 'Overcast Clouds',
      name: 'weather',
      id: 5
    },

    {
      icon: 'sleep-icon',
      title: 'sleep mode',
      name: 'sleep-mode',
      id: 7
    },
    {
      icon: 'audio-icon',
      title: 'audio',
      name: 'audio',
      id: 8
    },
    {
      icon: 'user-icon',
      title: 'user',
      name: 'user',
      id: 9
    },

    {
      icon: 'info-icon',
      title: 'information',
      name: 'information',
      id: 11
    },

    {
      icon: 'system-icon',
      title: 'system',
      name: 'system',
      id: 13
    },
    {
      icon: 'language-icon',
      title: 'language',
      name: 'language',
      id: 14
    },
  ],
  allService: [
    {
      icon: 'cleaning-icon',
      title: 'cleaning mode',
      name: 'cleaning-mode',
      id: 10
    },
    {
      icon: 'doors-icon',
      title: 'doors',
      name: 'doors',
      id: 12
    },
    {
      icon: 'transfers-icon',
      title: 'transfers',
      name: 'transfers',
      id: 6
    },
  ],

  addButtonWidget: {
    icon: 'plus-icon',
    title: '',
    link: 'add-widget',
    id: 4
  },
  modalCommonInfo: null, //{}
}

export const widgetsReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;
  switch (type) {

    case WIDGETS_ACTION_TYPES.SET_RENDER_WIDGETS:
      const newRenderWidgets = [...state.renderWidgets,payload];
      localStorage.setItem('main-widgets',JSON.stringify(newRenderWidgets));
      return {
        ...state,
        renderWidgets: newRenderWidgets
      }
    case WIDGETS_ACTION_TYPES.SET_MODAL_COMMON_INFO: 
      return {
        ...state,
        modalCommonInfo: payload,
      }
    default:
      return state;
  }
}
