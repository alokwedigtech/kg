import React from 'react';
import {Platform, StyleSheet, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import StepIndicator from 'react-native-step-indicator';

const labels = ['Personal Details', 'Self Assestement', 'OTP verification'];
const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  separatorFinishedColor: '#000',
  separatorUnFinishedColor: '#000',
  stepIndicatorFinishedColor: '#fff',
  stepIndicatorUnFinishedColor: '#fd551f',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: 'red',
  // stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#000',
  labelSize: 12,
  currentStepLabelColor: '#000',
};
const Registrationindicator = () => {
  return (
    <View style={styles.registerIndicatoricons}>
      <StepIndicator
        labels={labels}
        stepCount={3}
        stepStrokeCurrentColor="#000"
        currentStepLabelColor	="#000"
        customStyles={firstIndicatorStyles}

      />
     </View>
    // <View style={styles.registerIndicatoricons}>
    //   <View style={styles.registerIndicatoriconsitems}>
    //     {/* <View style={styles.registerIndicatoriconandlines}> */}
    //     <Icon name="user" size={25} color="#000" />
    //     {/* <Text>- - - - - </Text>
    //     </View> */}
        
    //     <Text style={styles.iconstext}> Personal Details</Text>
    //   </View>
    //   <View style={styles.registerIndicatoriconsitems}>
    //     <MaterialIcons name="self-improvement" size={25} color="#000" />
    //     <Text style={styles.iconstext}> Self Assestement</Text>
    //   </View>
    //   <View style={styles.registerIndicatoriconsitems}>
    //     <MaterialIcons name="verified" size={25} color="#000" />
    //     <Text style={styles.iconstext}>OTP verification</Text>
    //   </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  registerIndicatoricons: {
    // flexDirection: 'row',
    // paddingHorizontal: 20,
    // paddingVertical: 20,
    // justifyContent: 'space-between',
    marginTop: 10,
  },
  iconstext: {
    marginTop: 8,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  registerIndicatoriconsitems: {
    width: '30%',
    alignItems: 'center',
    paddingVertical: 10,
  },
  
});
export default Registrationindicator;
