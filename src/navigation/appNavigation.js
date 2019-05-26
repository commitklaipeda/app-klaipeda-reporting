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

const getTabNavigationOptions = (title: string, icon: string) => {
  return {
    defaultNavigationOptions: {
      title,
    },
    navigationOptions: {
      title,
      tabBarIcon: <Icon size={17} name={icon} />,
    },
  };
};

const FeedFlow = createStackNavigator({
  [FEED]: FeedScreen,
}, getTabNavigationOptions('Reports', 'layers'));

const SubmitFlow = createStackNavigator({
  [SUBMIT]: SubmitScreen,
}, getTabNavigationOptions('Submit', 'flag'));

const MapFlow = createStackNavigator({
  [MAP]: MapScreen,
}, getTabNavigationOptions('Map', 'map'));

const SettingsFlow = createStackNavigator({
  [SETTINGS]: SettingsScreen,
}, getTabNavigationOptions('Settings', 'settings'));

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
