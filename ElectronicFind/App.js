import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import AppNavigator from './src/AppNavigator';
import { Provider } from 'react-redux'
import store from './src/redux/store';
import MainContainer from './src/MainContainer';

const App = () => {
  return (
    <Provider store={store}>
      <MainContainer />
    </Provider>
  )
};

export default App;
