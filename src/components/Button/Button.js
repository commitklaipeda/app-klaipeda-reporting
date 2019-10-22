// @flow
import React from 'react';
import styled from 'styled-components/native';
import Icon from 'components/Icon';
import { dimensions, colors } from 'utils/variables';

type Props = {
  icon?: string,
  onPress?: string,
}

const Button = styled.View`
  height: ${dimensions.height.navHeaderButton}
  display: flex;
  align-self: center;
  margin-bottom: ${dimensions.spacing.navHeaderButtonBottomAdjust};
`;

const ButtonComponent = (props: Props) => {
  const {
    icon,
    onPress,
  } = props;
  return (
    <Button
      onPress={onPress}
    >
      {icon && <Icon name={icon} color={colors.black} size={dimensions.height.navHeaderButton} />}
    </Button>
  );
};

export default ButtonComponent;
