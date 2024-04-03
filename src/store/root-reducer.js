import { combineReducers } from 'redux';
import { widgetsReducer } from './widgets/widgets.reducer';
import { messagesReducer } from './messages/messages.reducer';
import { modalReducer } from './modal/modal.reducer';
export const rootReducer = combineReducers({
  widgets: widgetsReducer,
  messages: messagesReducer,
  modal: modalReducer,
});
