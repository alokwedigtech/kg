import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Login from './src/screens/auth/login/login';
import SplashScreen from './src/components/splash';
import RegisterProfile from './src/screens/auth/registration/registration';
import Professionaldetails from './src/screens/auth/registration/professionaldetails';
import About from './src/screens/auth/registration/about';
import Socialmedia from './src/screens/auth/registration/socialmedia';
import Council from './src/screens/auth/registration/council';
import Selfassestement from './src/screens/auth/registration/selfassessment'
import Verifyotp from './src/screens/auth/registration/verifyotp'
import Timeslot from './src/screens/auth/registration/timeslot'
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

export default class Myapp extends React.Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }

  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 1000);
  }

  render() {
    const Stack = createStackNavigator();
    return (
      <View style={styles.MainContainer}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RegisterProfile"
              component={RegisterProfile}
              options={{headerShown: true, title: 'Lawyer Registration'}}
            />
            <Stack.Screen
              name="Professionaldetails"
              component={Professionaldetails}
              options={{headerShown: true, title: 'Lawyer Registration'}}
            />
            <Stack.Screen
              name="About"
              component={About}
              options={{headerShown: true, title: 'Lawyer Registration'}}
            />
            <Stack.Screen
              name="Socialmedia"
              component={Socialmedia}
              options={{headerShown: true, title: 'Lawyer Registration'}}
            />
            <Stack.Screen
              name="Council"
              component={Council}
              options={{headerShown: true, title: 'Lawyer Registration'}}
            />
            <Stack.Screen
              name="Selfassestement"
              component={Selfassestement}
              options={{headerShown: true, title: 'Lawyer Registration'}}
            />
             <Stack.Screen
              name="Verifyotp"
              component={Verifyotp}
              options={{headerShown: true, title: 'Lawyer Registration'}}
            />
            <Stack.Screen
              name="Timeslot"
              component={Timeslot}
              options={{headerShown: true, title: 'Time Slot Management'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
});
