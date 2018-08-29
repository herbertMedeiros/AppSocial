import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Login from './src/components/Login/Login';
import Principal from './src/Home/Principal';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <AppStackNavigator />
    );
  }
}


const AppStackNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions:{
      header: null,
    }
  },

  Principal:{
    screen: Principal,
    navigationOptions:{
      header: null,
    }
  },

})
