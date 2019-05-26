// @flow
import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import AppNavigator from 'navigation/appNavigation';
import rootReducer from 'reducers/rootReducer';

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
);

export default class App extends PureComponent {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}
