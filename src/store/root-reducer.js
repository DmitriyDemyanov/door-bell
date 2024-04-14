import { combineReducers } from 'redux';
import { widgetsReducer } from './widgets/widgets.reducer';
import { messagesReducer } from './messages/messages.reducer';
import { modalReducer } from './modal/modal.reducer';
import { camerasReducer } from './cameras/cameras.reducer';
import { loaderReducer } from './loader/loader.reducer';
import { settingsReducer } from './settings/settings.reducer';
import { languagesReducer } from './languages/languages.reducer';
import { callHistoryReducer } from './call-history/call-history.reducer';
import { sleepModeReducer } from './sleep-mode/sleep-mode.reducer';

export const rootReducer = combineReducers({
  widgets: widgetsReducer,
  messages: messagesReducer,
  modal: modalReducer,
  cameras: camerasReducer,
  loader: loaderReducer,
  settings: settingsReducer,
  languages: languagesReducer,
  'call-history': callHistoryReducer,
  'sleep-mode': sleepModeReducer,
});
