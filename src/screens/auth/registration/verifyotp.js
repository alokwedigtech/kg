import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Registrationindicator from '../../../components/Registrationindicator';
import Touchablefullbutton from '../../../components/Fullbutton';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Verifyotp = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Registrationindicator />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerprofile}>
          <View style={styles.profilecontainer}>
            <Text style={styles.personaldetailstext}>Verify OTP</Text>
            <Text style={styles.socialmediastext}>
              Enter 6 digit code sent on your mobile no.
            </Text>
            <Text style={styles.socialmobileno}>
              7508769090 {}
              <Text style={styles.socialmobileedit}>Edit No.</Text>
            </Text>
            <View style={styles.otpconatiner}>
              <OTPInputView
                style={{width: '100%', 
                height: 10
              }}
                pinCount={6}
                // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                // onCodeChanged = {code => { this.setState({code})}}
                autoFocusOnLoad
                codeInputFieldStyle={styles.underlineStyleBase}
                codeInputHighlightStyle={styles.underlineStyleHighLighted}
                onCodeFilled={code => {
                  console.log(`Code is ${code}, you are good to go!`);
                }}
              />

              {/* <View style={styles.otpconatinernumber}>
              <Text style={styles.otpconatinerenterotptext}>1</Text>
            </View>
            <View style={styles.otpconatinernumber}>
              <Text style={styles.otpconatinerenterotptext}>2</Text>
            </View>
            <View style={styles.otpconatinernumber}>
              <Text style={styles.otpconatinerenterotptext}>3</Text>
            </View>
            <View style={styles.otpconatinernumber}>
              <Text style={styles.otpconatinerenterotptext}>4</Text>
            </View>
            <View style={styles.otpconatinernumber}>
              <Text style={styles.otpconatinerenterotptext}>5</Text>
            </View>
            <View style={styles.otpconatinernumber}>
              <Text style={styles.otpconatinerenterotptext}>6</Text>
            </View> */}
            </View>
            {/* 
          <View style={styles.otpconatinertime}>
            <Text style={styles.otpconatinerrunningtime}> 00:30</Text>
          </View> */}

            <View style={styles.bottombtn}>
              <Touchablefullbutton
                content={'Verify OTP'}
                type={'next'}
                onPress={() => navigation.navigate('Timeslot')}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#0000',
  },

  underlineStyleBase: {
    width: 40,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 3,
    borderColor:'#cccccc',
    color :'#000',
    backgroundColor:'#f5f5f5'
  },

  underlineStyleHighLighted: {
    // borderColor: '#0000',
    color:'#000'
  },

  bottombtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    width: '100%',
    marginBottom: 25,
  },
  otpconatinertime: {
    marginTop: 15,
  },
  otpconatinerrunningtime: {
    alignSelf: 'flex-end',
  },
  otpconatinernumber: {
    height: 50,
    width: 43,
    backgroundColor: '#f5f5f5',
    borderBottomWidth: 1,
    borderRadius: 3,
  },
  otpconatinerenterotptext: {
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  },
  socialmobileno: {
    marginTop: 10,
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
    marginRight: 5,
  },
  otpconatiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 40,
  },
  socialmobileedit: {
    color: '#fc551e',
    fontSize: 15,
    margin: 10,
  },
  socialmediastext: {
    color: '#808080',
  },
  containerprofile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  personaldetailstext: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profilecontainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
export default Verifyotp;
