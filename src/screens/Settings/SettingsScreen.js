// @flow
import React, { Component } from 'react';
import { Text, View } from 'react-native';

export default class SettingsScreen extends Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View>
        <Text>Settings</Text>
      </View>
    );
  }
}
