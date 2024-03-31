export const getWidgetsFooter = (state) => state.widgets.widgetsFooter;
export const getWidgetsMain = (state) => state.widgets.widgetsMain;
export const getAllSettingsItems = (state) => state.widgets.allSettings;
export const getAllServicesItems = (state) => state.widgets.allService;

export const getRenderWidgets = (state) => {
  return state.widgets.widgetsMain.concat(state.widgets.renderWidgets,state.widgets.addButtonWidget)
}

export const getModalCommonInfo = (state) => state.widgets.modalCommonInfo;




