import { combineReducers } from 'redux';
import { widgetsReducer } from './widgets/widgets.reducer';
import { messagesReducer } from './messages/messages.reducer';
import { modalReducer } from './modal/modal.reducer';
import { camerasReducer } from './cameras/cameras.reducer';
import { loaderReducer } from './loader/loader.reducer';
export const rootReducer = combineReducers({
  widgets: widgetsReducer,
  messages: messagesReducer,
  modal: modalReducer,
  cameras: camerasReducer,
  loader: loaderReducer,
});
