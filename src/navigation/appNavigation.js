// @flow
import React from 'react';
import { Platform, TouchableOpacity } from 'react-native';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import styled from 'styled-components';
import FeedScreen from 'screens/Feed/FeedScreen';
import SubmitScreen from 'screens/Submit/SubmitScreen';
import MapScreen from 'screens/Map/MapScreen';
import ReportDetailsScreen from 'screens/ReportDetails/ReportDetailsScreen';
import {
  TABS_FLOW,
  TAB_FEED,
  TAB_MAP,
  TAB_SUBMIT,
  FEED,
  MAP,
  SUBMIT,
  REPORT_DETAILS,
} from 'constants/navigationConstants';
import Icon from 'components/Icon';
import { fonts, colors, dimensions, fontSizes } from 'utils/variables';
import i18n from 'services/i18n';

const TabBarLabel = styled.Text`
  text-align: center;
  font-family: ${({ isCenterButton }) => isCenterButton ? fonts.semiBold : fonts.regular}
  font-size: ${({ isCenterButton }) => isCenterButton ? fontSizes.tabBarCenterLabel : fontSizes.tabBarLabel}
  color: ${({ isCenterButton }) => isCenterButton ? colors.black : colors.blue}
`;

const IconWrapper = styled.View`
  ${({ isCenterButton }) => isCenterButton && `
    position: relative;
    top: -14px;
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
  headerLayoutPreset: 'left',
  defaultNavigationOptions: {
    title,
    headerTitleAllowFontScaling: false,
    headerStyle: {
      backgroundColor: colors.white,
      shadowColor: colors.transparent,
      borderBottomColor: colors.transparent,
      elevation: 0,
      paddingBottom: 20,
    },
    headerTintColor: colors.black,
    headerTitleStyle: {
      fontSize: fontSizes.heading,
      fontWeight: null, // fix
      fontFamily: fonts.semiBold,
      paddingLeft: dimensions.spacing.content,
      paddingRight: dimensions.spacing.content,
      marginLeft: 0,
      marginRight: 0,
    },
  },
  navigationOptions: ({ navigation }) => {
    const isNextScreen = navigation.state.index !== 0;
    return {
      title,
      tabBarVisible: !isNextScreen,
      tabBarOptions: {
        showLabel: true,
        activeTintColor: colors.blue,
        inactiveTintColor: colors.blue,
        allowFontScaling: false,
        labelPosition: 'below-icon',
        style: {
          backgroundColor: colors.white,
          borderTopColor: colors.transparent,
          elevation: 20,
          shadowColor: colors.realBlack,
          shadowOffset: { width: 0, height: -4 },
          shadowOpacity: 0.05,
          shadowRadius: 2,
          ...Platform.select({
            ios: {},
            android: {
              height: 60,
              paddingBottom: 14,
            },
          }),
        },
        tabStyle: {
        },
        labelStyle: {
          paddingTop: 0,
          marginTop: 0,
        },
      },
      tabBarButtonComponent: (props) => <TouchableOpacity {...props} />,
      tabBarIcon: (tabBarIconProps) => {
        const { tintColor, focused, tabBarOnPress } = tabBarIconProps;
        const iconColor = isCenterButton ? colors.white : tintColor;
        const iconSize = isCenterButton ? 35 : 15;
        const iconName = (focused && focusedIcon) || icon;
        return (
          <IconWrapper
            onPress={tabBarOnPress}
            isCenterButton={isCenterButton}
            style={isCenterButton && {
              shadowColor: colors.realBlack,
              shadowOffset: { width: 3, height: 3 },
              shadowOpacity: 0.2,
              shadowRadius: 5,
            }}
          >
            <Icon
              color={iconColor}
              size={iconSize}
              name={iconName}
            />
          </IconWrapper>
        );
      },
      tabBarLabel: () => <TabBarLabel isCenterButton={isCenterButton}>{title}</TabBarLabel>,
    };
  },
});

const FeedFlow = createStackNavigator({
  [FEED]: FeedScreen,
  [REPORT_DETAILS]: ReportDetailsScreen,
}, getTabNavigationOptions(i18n.t('navigation.titles.reports'), 'fa.bell-o', 'fa.bell'));

const SubmitFlow = createStackNavigator({
  [SUBMIT]: SubmitScreen,
}, getTabNavigationOptions(i18n.t('navigation.titles.submit'), 'entypo.plus', null, true));

const MapFlow = createStackNavigator({
  [MAP]: MapScreen,
  [REPORT_DETAILS]: ReportDetailsScreen,
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
