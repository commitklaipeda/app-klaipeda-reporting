// @flow
import React, { PureComponent } from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AppNavigator from 'navigation/appNavigation';
import rootReducer from 'reducers/rootReducer';
import { colors } from 'utils/variables';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <StatusBar backgroundColor={colors.white} barStyle="dark-content" />
        <AppNavigator />
      </Provider>
    );
  }
}
