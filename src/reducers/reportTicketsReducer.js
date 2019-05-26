// @flow
import {
  ADD_REPORT_TICKET,
  SET_REPORT_TICKETS,
} from 'constants/reportTicketsConstants';
import type { ReportTicket } from 'models/ReportTicket';

export type reportTicketsReducerState = {
  data: ReportTicket[],
}

export type reportTicketsReducerAction = {
  type: string,
  payload: any
}

const initialState = {
  data: [],
};

export default function reportTicketsReducer(
  state: reportTicketsReducerState = initialState,
  action: reportTicketsReducerAction,
) {
  switch (action.type) {
    case SET_REPORT_TICKETS:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_REPORT_TICKET:
      return {
        ...state,
        data: [
          ...state.data,
          action.payload,
        ],
      };
    default:
      return state;
  }
}
