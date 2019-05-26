// @flow
import React, { Component } from 'react';
import { Text, View } from 'react-native';
import MapView from 'react-native-maps';

export default class MapScreen extends Component {
  static navigationOptions = {
    title: 'Map',
  };

  render() {
    return (
      <View style={{ width: '100%', height: '100%' }}>
        <MapView style={{ width: '100%', height: '100%' }} />
      </View>
    );
  }
}
