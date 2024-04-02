import { combineReducers } from 'redux';
import { widgetsReducer } from './widgets/widgets.reducer';
import { messagesReducer } from './messages/messages.reducer';
export const rootReducer = combineReducers({
  widgets: widgetsReducer,
  messages: messagesReducer,
});