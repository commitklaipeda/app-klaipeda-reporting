// @flow
import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import {
  colors,
  dimensions,
  fonts,
  fontSizes,
} from 'utils/variables';

import type { ReportTicket } from 'models/ReportTicket';

type Props = {
  item: ReportTicket,
}

const ReportTicketWrapper = styled.View`
  margin-bottom: ${dimensions.spacing.cardVertical}px;
  padding-top: ${dimensions.spacing.cardVertical}px;
  padding-bottom: ${dimensions.spacing.cardVertical}px;
  padding-left: ${dimensions.spacing.cardHorizontal}px;
  padding-right: ${dimensions.spacing.cardHorizontal}px;
  flex-direction: row;
`;

const ReportImage = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  margin-right: ${dimensions.spacing.cardHorizontal}px;
`;

const ReportTitle = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: ${fontSizes.content};
  color: ${colors.black};
  margin-bottom: 7px;
`;

const ReportShortText = styled.Text`
  font-family: ${fonts.light};
  font-size: ${fontSizes.medium};
  color: ${colors.grey};
`;


const ReportTextWrapper = styled.View`
  flex: 1;
`;

const ListItemReportTicket = (props: Props) => {
  const {
    item: {
      title,
      short,
      image,
    },
  } = props;
  return (
    <ReportTicketWrapper>
      <ReportImage
        resizeMode="cover"
        source={{ uri: image }}
      />
      <ReportTextWrapper>
        <ReportTitle>{title}</ReportTitle>
        <ReportShortText>{short}</ReportShortText>
      </ReportTextWrapper>
    </ReportTicketWrapper>

  );
};

export default ListItemReportTicket;
