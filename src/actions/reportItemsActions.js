// @flow
import { SET_REPORT_TICKETS, SET_REPORT_TICKETS_FETCHING } from 'constants/reportItemsConstants';
import ApiService from 'services/api';

export const fetchReportItemsAction = () => async (dispatch: Function) => {
  dispatch({
    type: SET_REPORT_TICKETS_FETCHING,
    payload: true,
  });
  const reportItems = await ApiService.fetchReportItems();
  dispatch({
    type: SET_REPORT_TICKETS,
    payload: reportItems,
  });
};
