import { combineReducers } from 'redux';
import { widgetsReducer } from './widgets/widgets.reducer';

export const rootReducer = combineReducers({
  widgets: widgetsReducer,
});