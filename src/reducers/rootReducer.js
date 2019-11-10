// @flow
import { combineReducers } from 'redux';
import reportItemsReducer from 'reducers/reportItemsReducer';

const rootReducer = combineReducers({
  reportItems: reportItemsReducer,
});

export default rootReducer;
