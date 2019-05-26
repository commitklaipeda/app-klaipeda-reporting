// @flow
import { SET_REPORT_TICKETS } from 'constants/reportTicketsConstants';
import ApiService from 'services/api';

export const fetchReportTicketsAction = () => async (dispatch: Function) => {
  const reportTickets = await ApiService.fetchReportTickets();
  dispatch({
    type: SET_REPORT_TICKETS,
    payload: reportTickets,
  });
};
