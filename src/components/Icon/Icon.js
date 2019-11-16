// @flow
import React from 'react';
import { Text } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';

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
    case 'feather':
      return (<Feather {...props} name={iconName} />);
    case 'evil':
      return (<EvilIcons {...props} name={iconName} />);
    case 'ad':
      return (<AntDesign {...props} name={iconName} />);
    case 'simpleline':
      return (<SimpleLineIcon {...props} name={iconName} />);
    default:
      return (<Text>{name}</Text>);
  }
};

export default Icon;
