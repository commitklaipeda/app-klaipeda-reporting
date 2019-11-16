// @flow
import styled from 'styled-components/native';
import { SafeAreaView } from 'react-navigation';
import { colors, dimensions } from 'utils/variables';

const ContentWrapper = styled(SafeAreaView)`
  background: ${({ backgroundColor }) => backgroundColor || colors.white};
  flex: 1;
  ${({ noPadding }) => !noPadding && `
    padding-left: ${dimensions.spacing.content}px;
    padding-right: ${dimensions.spacing.content}px;
    padding-bottom: ${dimensions.spacing.contentBottom}px;
  `}
`;

export default ContentWrapper;
