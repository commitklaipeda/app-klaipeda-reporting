// @flow
import React from 'react';
import styled from 'styled-components/native';

import { fontSizes, fonts, colors, dimensions } from 'utils/variables';

const SectionHeaderTitle = styled.Text`
  padding-left: ${dimensions.spacing.listSectionHeaderHorizontal}px;
  padding-top: ${dimensions.spacing.listSectionHeaderVertical}px;
  padding-bottom: ${dimensions.spacing.listSectionHeaderVertical}px;
  font-family: ${fonts.semiBold};
  font-size: ${fontSizes.small};
  color: ${colors.darkGrey};
  text-transform: uppercase;
`;

type Props = {
  title: string,
}

const ListSectionHeader = ({ title }: Props) => <SectionHeaderTitle>{title}</SectionHeaderTitle>;

export default ListSectionHeader;
