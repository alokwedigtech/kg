import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  MainStackNavigator,
  ContactStackNavigator,
  QandAStackNavigator,
} from './StackNavigator';
import Entypo from 'react-native-vector-icons/Entypo';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'add-user' : 'remove-user';
          } else if (route.name === 'Appoinments') {
            iconName = focused ? 'user' : 'users';
          } else if (route.name === 'QandA') {
            iconName = focused ? 'user' : 'users';
          }

          // You can return any component that you like here!
          //   return <Ionicons name={iconName} size={size} color={color} />;
          return <Entypo name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Appoinments" component={ContactStackNavigator} />
      <Tab.Screen name="QandA" component={QandAStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
