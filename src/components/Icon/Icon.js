// @flow
import React from 'react';
import { Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

type Props = {
  name: string,
}

const Icon = (props: Props) => {
  const { name } = props;
  const [iconType, iconName] = name.split('.');
  switch (iconType) {
    case 'fa':
      return (<FontAwesome {...props} name={iconName} />);
    case 'entypo':
      return (<Entypo {...props} name={iconName} />);
    default:
      return (<Text>{name}</Text>);
  }
};

export default Icon;
