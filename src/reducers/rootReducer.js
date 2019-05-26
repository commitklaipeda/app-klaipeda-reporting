// @flow
import { combineReducers } from 'redux';
import reportTicketsReducer from 'reducers/reportTicketsReducer';

const rootReducer = combineReducers({
  reportTickets: reportTicketsReducer,
});

export default rootReducer;
