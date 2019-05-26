// @flow
import styled from 'styled-components/native';
import { colors, fonts, fontSizes } from 'utils/variables';

const NavigationTitle = styled.Text`
  font-family: ${fonts.primary.regular};
  font-size: ${fontSizes.content};
  include-font-padding: false;
  text-align-vertical: center;
  color: ${colors.black};
`;

export default NavigationTitle;
