// @flow
import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

import { dimensions, colors, fonts, fontSizes } from 'utils/variables';

type Props = {
  placeholder?: string,
  inputHeight?: number,
  multiline?: boolean,
  hasError?: boolean,
  onChangeText?: (text: ?string) => void,
};

const StyledTextInput = styled(TextInput)`
  height: ${({ inputHeight }) => inputHeight || dimensions.height.textInputRegular}px;
  background: ${colors.white};
  font-family: ${fonts.light};
  font-size: ${fontSizes.content}
  color: ${colors.black}
  padding: ${dimensions.spacing.inputVertical}px ${dimensions.spacing.inputHorizontal}px;
  border-color: ${({ hasError }) => hasError ? colors.red : colors.mediumGrey};
  border-radius: 10px;
  border-width: 0.5px;
`;

const TextInputComponent = ({
  placeholder,
  multiline = false,
  inputHeight,
  onChangeText,
  hasError,
}: Props) => (
  <StyledTextInput
    inputHeight={inputHeight}
    multiline={multiline}
    placeholder={placeholder}
    placeholderTextColor={colors.black}
    hasError={hasError}
    onChangeText={onChangeText}
  />
);

export default TextInputComponent;
