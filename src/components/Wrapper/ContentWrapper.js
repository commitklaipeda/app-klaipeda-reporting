// @flow
import styled from 'styled-components/native';
import { colors, dimensions } from 'utils/variables';

const ContentWrapper = styled.View`
  background: ${colors.white};
  margin-top: 45px;
  padding-left: ${({ noSidePadding }) => (noSidePadding ? 0 : dimensions.spacing.content)}px;
  padding-right: ${({ noSidePadding }) => (noSidePadding ? 0 : dimensions.spacing.content)}px;
`;

export default ContentWrapper;
