import { WIDGETS_ACTION_TYPES } from "./widgets.types";


export const setWidgetsFooter = (widgets) => ({ type: WIDGETS_ACTION_TYPES.SET_WIDGETS_FOOTER,payload: widgets });
export const setWidgetsMain = (widgets) => ({ type: WIDGETS_ACTION_TYPES.SET_WIDGETS_MAIN,payload: widgets });
export const setAllServiceItems = (item) => ({ type: WIDGETS_ACTION_TYPES.SET_ALL_SERVICE,payload: item });
export const setAllSettingsItems = (item) => ({ type: WIDGETS_ACTION_TYPES.SET_ALL_SETTINGS,payload: item });
export const setRenderWidgets = (item) => {
  
  return {
    type: WIDGETS_ACTION_TYPES.SET_RENDER_WIDGETS,
    payload: item
  }
}