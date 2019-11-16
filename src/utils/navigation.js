// @flow
import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'components/Icon';
import { colors, dimensions } from './variables';

export const screenWithTransparentHeaderNavigationParams = (
  { navigation },
  additional?: Object = {},
) => ({
  headerTransparent: true,
  headerStyle: {},
  headerLeftContainerStyle: {
    paddingLeft: dimensions.spacing.content,
  },
  headerLeft: (
    <TouchableOpacity onPress={() => navigation.goBack(null)}>
      <Icon
        name="feather.arrow-left"
        size={30}
        color={colors.white}
      />
    </TouchableOpacity>
  ),
  ...additional,
});

export const screenWithRightDismissNavigationParams = (
  { navigation },
  additional?: Object = {},
) => ({
  headerRightContainerStyle: {
    paddingRight: dimensions.spacing.content,
  },
  headerRight: (
    <TouchableOpacity onPress={() => navigation.goBack(null)}>
      <Icon
        name="ad.close"
        size={30}
        color={colors.black}
      />
    </TouchableOpacity>
  ),
  ...additional,
});
