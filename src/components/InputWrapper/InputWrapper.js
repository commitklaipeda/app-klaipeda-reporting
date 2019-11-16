// @flow
import React from 'react';
import styled from 'styled-components/native';

import { fonts, fontSizes, colors } from 'utils/variables';

type Props = {
  labelText: string,
  children: any,
};

const Wrapper = styled.View`
  margin-bottom: 20px;
`;

const Label = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: ${fontSizes.medium}
  color: ${colors.black}
  margin-bottom: 9px;
`;

const InputWrapper = ({ labelText, children }: Props) => (
  <Wrapper>
    <Label>{labelText}</Label>
    {children}
  </Wrapper>
);

export default InputWrapper;
