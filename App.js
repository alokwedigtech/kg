import React from 'react';
import {Platform, StyleSheet, View} from 'react-native';
import Login from './src/screens/auth/login/login';
import SplashScreen from './src/components/splash';
import RegisterProfile from './src/screens/auth/registration/registration'
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
    return (
      <View style={styles.MainContainer}>
        {this.state.isVisible === true ? <SplashScreen /> : <RegisterProfile />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
  },
});
