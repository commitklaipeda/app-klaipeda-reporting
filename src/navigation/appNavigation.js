// @flow
import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import styled from 'styled-components';
import FeedScreen from 'screens/Feed/FeedScreen';
import SubmitScreen from 'screens/Submit/SubmitScreen';
import MapScreen from 'screens/Map/MapScreen';
import {
  TABS_FLOW,
  TAB_FEED,
  TAB_MAP,
  TAB_SUBMIT,
  FEED,
  MAP,
  SUBMIT,
} from 'constants/navigationConstants';
import Icon from 'components/Icon';
import { fonts, colors, dimensions, fontSizes } from 'utils/variables';
import i18n from 'services/i18n';

import type {
  TabBarIconProps,
} from 'react-navigation';

const TabBarLabel = styled.Text`
  text-align: center;
  font-family: ${({ isCenterButton }) => isCenterButton ? fonts.semiBold : fonts.regular}
  font-size: ${({ isCenterButton }) => isCenterButton ? fontSizes.tabBarCenterLabel : fontSizes.tabBarLabel}
  color: ${({ isCenterButton }) => isCenterButton ? colors.black : colors.blue}
`;

const IconWrapper = styled.View`
  ${({ isCenterButton }) => isCenterButton && `
    position: relative;
    top: -12px;
    height: 42px;
    width: 42px;
    border-radius: 21px;
    background: ${colors.blue};
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  elevation: 3;
`;

const getTabNavigationOptions = (
  title: string,
  icon: string,
  focusedIcon: string,
  isCenterButton: boolean = false,
) => ({
  defaultNavigationOptions: {
    title,
    headerTransparent: true,
    headerStyle: {
      backgroundColor: colors.white,
      shadowColor: colors.transparent,
      elevation: 0,
      marginTop: dimensions.spacing.navHeaderTop,
      marginBottom: 0, //dimensions.spacing.navHeaderBottom,
      marginLeft: dimensions.spacing.content,
      marginRight: dimensions.spacing.content,
      height: 60,
    },
    headerTintColor: colors.black,
    headerTitleStyle: {
      fontSize: fontSizes.headerTitle,
      fontWeight: null, // fix
      fontFamily: fonts.semiBold,
      paddingLeft: 0,
      paddingRight: 0,
      marginLeft: 0,
      marginRight: 0,
    },
  },
  navigationOptions: {
    title,
    tabBarOptions: {
      showLabel: true,
      activeTintColor: colors.blue,
      inactiveTintColor: colors.blue,
      allowFontScaling: false,
      style: {
        backgroundColor: colors.white,
        borderTopColor: colors.transparent,
        elevation: 20,
        paddingBottom: 14,
        // shadowColor: '#000',
        // shadowOffset: { width: 0, height: -2 },
        // shadowOpacity: 0.05,
        // shadowRadius: 2,
        height: 65,
      },
      labelStyle: {
        paddingTop: 0,
        marginTop: 0,
      },
    },
    tabBarIcon: ({ tintColor, focused }: TabBarIconProps) => {
      const iconColor = isCenterButton ? colors.white : tintColor;
      const iconSize = isCenterButton ? 35 : 15;
      const iconName = (focused && focusedIcon) || icon;
      return (
        <IconWrapper isCenterButton={isCenterButton}>
          <Icon
            color={iconColor}
            size={iconSize}
            name={iconName}
          />
        </IconWrapper>
      );
    },
    tabBarLabel: () => <TabBarLabel isCenterButton={isCenterButton}>{title}</TabBarLabel>,
  },
});

const FeedFlow = createStackNavigator({
  [FEED]: FeedScreen,
}, getTabNavigationOptions(i18n.t('navigation.titles.reports'), 'fa.bell-o', 'fa.bell'));

const SubmitFlow = createStackNavigator({
  [SUBMIT]: SubmitScreen,
}, getTabNavigationOptions(i18n.t('navigation.titles.submit'), 'entypo.plus', null, true));

const MapFlow = createStackNavigator({
  [MAP]: MapScreen,
}, getTabNavigationOptions(i18n.t('navigation.titles.map'), 'fa.map-o', 'fa.map'));

const TabsFlow = createBottomTabNavigator({
  [TAB_FEED]: FeedFlow,
  [TAB_SUBMIT]: SubmitFlow,
  [TAB_MAP]: MapFlow,
});

const AppNavigator = createSwitchNavigator({
  [TABS_FLOW]: TabsFlow,
});

export default createAppContainer(AppNavigator);
