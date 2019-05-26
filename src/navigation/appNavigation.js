// @flow
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import FeedScreen from 'screens/Feed/FeedScreen';
import SettingsScreen from 'screens/Settings/SettingsScreen';
import SubmitScreen from 'screens/Submit/SubmitScreen';
import MapScreen from 'screens/Map/MapScreen';
import {
  TABS_FLOW,
  TAB_FEED,
  TAB_MAP,
  TAB_SUBMIT,
  TAB_SETTINGS,
  FEED,
  MAP,
  SETTINGS,
  SUBMIT,
} from 'constants/navigationConstants';
import { fonts } from 'utils/variables';
import i18n from 'services/i18n';

const getTabNavigationOptions = (title: string, icon: string) => {
  return {
    defaultNavigationOptions: {
      title,
      headerTitleStyle: {
        fontWeight: null, // fix
        fontFamily: fonts.primary.bold,
      },
    },
    navigationOptions: {
      title,
      tabBarIcon: <Icon size={17} name={icon} />,
    },
  };
};

const FeedFlow = createStackNavigator({
  [FEED]: FeedScreen,
}, getTabNavigationOptions(i18n.t('navigation.titles.reports'), 'layers'));

const SubmitFlow = createStackNavigator({
  [SUBMIT]: SubmitScreen,
}, getTabNavigationOptions(i18n.t('navigation.titles.submit'), 'flag'));

const MapFlow = createStackNavigator({
  [MAP]: MapScreen,
}, getTabNavigationOptions(i18n.t('navigation.titles.map'), 'map'));

const SettingsFlow = createStackNavigator({
  [SETTINGS]: SettingsScreen,
}, getTabNavigationOptions(i18n.t('navigation.titles.settings'), 'settings'));

const TabsFlow = createBottomTabNavigator({
  [TAB_FEED]: FeedFlow,
  [TAB_SUBMIT]: SubmitFlow,
  [TAB_MAP]: MapFlow,
  [TAB_SETTINGS]: SettingsFlow,
});

const AppNavigator = createSwitchNavigator({
  [TABS_FLOW]: TabsFlow,
});

export default createAppContainer(AppNavigator);
