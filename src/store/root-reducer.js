import { combineReducers } from 'redux';
import { widgetsReducer } from './widgets/widgets.reducer';
import { modalReducer } from './modal/modal.reducer';

export const rootReducer = combineReducers({
  widgets: widgetsReducer,
  modal: modalReducer,
});