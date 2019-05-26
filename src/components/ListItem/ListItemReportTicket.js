// @flow
import * as React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { fonts } from 'utils/variables';
import type { ReportTicket } from 'models/ReportTicket';

const ReportTicketView = styled.View`
  margin-bottom: 10px;
`;

type Props = {
  item: ReportTicket,
}

const ListItemReportTicket = (props: Props) => {
  const { item } = props;
  return (
    <ReportTicketView>
      <Text>test </Text>
    </ReportTicketView>
  );
};

export default ListItemReportTicket;
