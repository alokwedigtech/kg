import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNavigator from './src/screens/Navigation/StackNavigator';
import BottomTabNavigator from './src/screens/Navigation/TabNavigator'

export default class Myapp extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <MainStackNavigator />
      </NavigationContainer>
    );
  }
}