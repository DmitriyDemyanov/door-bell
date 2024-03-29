import { WIDGETS_ACTION_TYPES } from "./widgets.types";

const INITIAL_STATE = {
  widgetsFooter: [],
  widgetsMain: [],
  renderWidgets: [
    {
      icon: 'cameras-icon',
      title: 'cameras',
      link: '/add-widget',
      id: 1
    },
    {
      icon: 'services-icon',
      title: 'services',
      link: '/',
      id: 2
    },
    {
      icon: 'message-icon',
      title: 'message',
      link: '/',
      id: 3
    },
    {
      icon: 'plus-icon',
      title: '',
      link: 'add-widget',
      id: 4
    }
  ],
  allSettings: [],
  allService: [],

  // addButtonWidget: {
  //   icon: 'plus-icon',
  //   title: '',
  //   link: 'add-widget',
  //   id: 4
  // }
}

export const widgetsReducer = (state = INITIAL_STATE,action) => {
  const { type,payload } = action;
  switch (type) {
    case WIDGETS_ACTION_TYPES.SET_WIDGETS_FOOTER:
      return {
        ...state,
        widgetsFooter: payload
      }
    case WIDGETS_ACTION_TYPES.SET_WIDGETS_MAIN:
      return {
        ...state,
        widgetsMain: payload
      }
    case WIDGETS_ACTION_TYPES.SET_ALL_SERVICE:
      return {
        ...state,
        allService: payload
      }
    case WIDGETS_ACTION_TYPES.SET_ALL_SETTINGS:
      return {
        ...state,
        allSettings: payload
      }
    case WIDGETS_ACTION_TYPES.SET_RENDER_WIDGETS:
      return {
        ...state,
        renderWidgets: [...state.renderWidgets,payload]
        // renderWidgets: [...state.renderWidgets].splice(2,0,payload)
      }
    default:
      return state;
  }
}

// radial-gradient(ellipse at top, rgba(255, 255, 255, 0.4) 20%, transparent 90%)

// background: linear-gradient(180deg, #333333, #202020);