// @flow
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { colors, fonts, fontSizes } from 'utils/variables';

type Props = {
  onPress?: string,
  width?: number | string,
  height?: number | string,
  title: string,
  backgroundColor?: string,
  borderColor?: string,
  textColor?: string,
  contentLeft?: any,
  center?: boolean,
}

const ButtonWrapper = styled(TouchableOpacity)`
  background: ${({ backgroundColor }) => backgroundColor || colors.blue};
  ${({ width }) => width && `width: ${width};`}
  height: ${({ height }) => height || 55}px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${({ fulllWidth, width }) => !width && fulllWidth && 'width: 100%;'}
  ${({ center }) => center && 'align-self: center;'}
  border-radius: 25px;
  ${({ borderColor }) => borderColor && `
    border-width: 0.5px;
    border-color: ${borderColor};
  `};
`;

const ButtonContent = styled.View`
  padding: 0px 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const ButtonTitle = styled.Text`
  color: ${({ textColor }) => textColor || colors.white};
  font-family: ${fonts.semiBold};
  font-size: ${fontSizes.content};
`;

const ContentLeft = styled.View`
  margin-right: 10px;
`;

const ButtonComponent = (props: Props) => {
  const {
    onPress,
    title,
    backgroundColor,
    borderColor,
    textColor,
    contentLeft,
    width,
    height,
    center,
  } = props;
  return (
    <ButtonWrapper
      onPress={onPress}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      width={width}
      height={height}
      center={center}
    >
      <ButtonContent>
        {contentLeft && <ContentLeft>{contentLeft}</ContentLeft>}
        {title && <ButtonTitle textColor={textColor}>{title}</ButtonTitle>}
      </ButtonContent>
    </ButtonWrapper>
  );
};

export default ButtonComponent;
