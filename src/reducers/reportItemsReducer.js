// @flow
import {
  ADD_REPORT_TICKET,
  SET_REPORT_TICKETS,
  SET_REPORT_TICKETS_FETCHING,
} from 'constants/reportItemsConstants';
import type { Report } from 'models/Report';

export type reportItemsReducerState = {
  data: Report[],
}

export type reportItemsReducerAction = {
  type: string,
  payload: any
}

const initialState = {
  data: [],
  isFetching: false,
};

export default function reportItemsReducer(
  state: reportItemsReducerState = initialState,
  action: reportItemsReducerAction,
) {
  switch (action.type) {
    case SET_REPORT_TICKETS:
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      };
    case ADD_REPORT_TICKET:
      return {
        ...state,
        data: [
          ...state.data,
          action.payload,
        ],
      };
    case SET_REPORT_TICKETS_FETCHING:
      return {
        ...state,
        isFetching: action.payload,
      };
    default:
      return state;
  }
}
