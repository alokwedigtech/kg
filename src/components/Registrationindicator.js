import React from 'react';
import {Platform, StyleSheet, View,Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Registrationindicator = () => {
  return (
    <View style={styles.registerIndicatoricons}>
      <View style={styles.registerIndicatoriconsitems}>
        <Icon name="user" size={30} color="#000" />
        <Text style={styles.iconstext}> Personal Details</Text>
      </View>
      <View style={styles.registerIndicatoriconsitems}>
        <MaterialIcons name="self-improvement" size={30} color="#000" />
        <Text style={styles.iconstext}> Self Assestement</Text>
      </View>
      <View style={styles.registerIndicatoriconsitems}>
        <MaterialIcons name="verified" size={30} color="#000" />
        <Text style={styles.iconstext}>OTP verification</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registerIndicatoricons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: 'space-between',
    marginTop: 10,
  },
  iconstext: {
    marginTop: 8,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign :'center'
  },
  registerIndicatoriconsitems: {
    width: '30%',
    alignItems: 'center',
    paddingVertical:10,
  },
});
export default Registrationindicator;
