import React from 'react';
import {View, StatusBar,StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const SplashScreen = () => {
  return (
    <>
      <StatusBar backgroundColor="#f8821b" barStyle="light-content" />
      <LinearGradient
        colors={['#f8821b', '#e44b08']}
        style={styles.splashcontainer}>
        <View style={styles.splashcontainerlogo}></View>
      </LinearGradient>
    </>
  );
};

const styles=StyleSheet.create({
    splashcontainer: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      },
      splashcontainerlogo:{
        height : 300,
        width:300,
        borderRadius : 200,
        backgroundColor :'#ffffff'
      },
})

export default SplashScreen;
