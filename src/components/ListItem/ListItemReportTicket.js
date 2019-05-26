// @flow
import * as React from 'react';
import styled from 'styled-components/native';
import type { ReportTicket } from 'models/ReportTicket';

const ReportTicketView = styled.View`
  margin-bottom: 10px;
  borderWidth: 1;
  borderColor: #ddd
  height: 20px;
  elevation: 4;
  padding: 15px;
  width: 100%;
`;

type Props = {
  item: ReportTicket,
}

const ListItemReportTicket = (props: Props) => {
  const { item } = props;
  return (
    <ReportTicketView />
  );
};

export default ListItemReportTicket;
