// @flow
import React from 'react';
import styled from 'styled-components/native';

import { dimensions, colors, fonts, fontSizes } from 'utils/variables';

type Option = {
  title: string,
  value: any,
};

type Props = {
  placeholder?: string,
  hasError?: boolean,
  options: Option[],
  onSelectOption?: (value: any) => void,
};

type State = {
  selectedOption: ?Option,
};

const SelectInputWrapper = styled.View`
  height: ${({ inputHeight }) => inputHeight || dimensions.height.textInputRegular}px;
  background: ${colors.white};
  padding: ${dimensions.spacing.inputVertical}px ${dimensions.spacing.inputHorizontal}px;
  border-color: ${({ hasError }) => hasError ? colors.red : colors.mediumGrey};
  border-radius: 10px;
  border-width: 0.5px;
`;

const OptionTitle = styled.Text`
  font-family: ${fonts.light};
  font-size: ${fontSizes.content}
  color: ${colors.black}
`;

export default class SelectInput extends React.Component<Props, State> {
  state = {
    selectedOption: null,
  };

  render() {
    const { hasError, placeholder } = this.props;
    const { selectedOption } = this.state;
    const selectedOptionTitle = selectedOption && selectedOption.title;
    return (
      <SelectInputWrapper
        hasError={hasError}
      >
        <OptionTitle>{selectedOptionTitle || placeholder || 'Pasirinkite'}</OptionTitle>
      </SelectInputWrapper>
    );
  }
}
