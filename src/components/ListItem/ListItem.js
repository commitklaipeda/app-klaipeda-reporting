// @flow
import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import {
  colors,
  dimensions,
  fonts,
  fontSizes,
} from 'utils/variables';

type Props = {
  title: string,
  content: string,
  image: string,
  onPress: Function,
}

const ListItemWrapper = styled(TouchableOpacity)`
  margin-bottom: ${dimensions.spacing.cardVertical}px;
  padding-top: ${dimensions.spacing.cardVertical}px;
  padding-bottom: ${dimensions.spacing.cardVertical}px;
  flex-direction: row;
`;

const ItemImage = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  margin-right: ${dimensions.spacing.cardHorizontal}px;
`;

const ItemTitle = styled.Text`
  font-family: ${fonts.semiBold};
  font-size: ${fontSizes.content};
  color: ${colors.black};
  margin-bottom: 7px;
`;

const ItemShortText = styled.Text`
  font-family: ${fonts.light};
  font-size: ${fontSizes.medium};
  color: ${colors.grey};
`;


const ItemTextWrapper = styled.View`
  flex: 1;
`;

const ListItem = (props: Props) => {
  const {
    title,
    content,
    image,
    onPress,
  } = props;
  return (
    <ListItemWrapper onPress={onPress}>
      <ItemImage
        resizeMode="cover"
        source={{ uri: image }}
      />
      <ItemTextWrapper>
        <ItemTitle>{title}</ItemTitle>
        <ItemShortText numberOfLines={2}>{content}</ItemShortText>
      </ItemTextWrapper>
    </ListItemWrapper>

  );
};

export default ListItem;
