import React, { useState } from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  StatusBar,
  TextInput,
  Alert,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import StyledButton from '../../../components/Button';

const Login = ({ navigation }) => {
  const [mobileno, setmobileno] = useState('');
  const [loginerror, setloginerror] = useState(false);

  const loginonchange = text => {
    setmobileno(text);
    if (mobileno.length === 9) {
      setloginerror(false);
    } else {
      setloginerror(true);
    }
  };

  const Loginsubmit = () => {
    if (mobileno.length === 9) {
      Alert.alert('submit');
      setloginerror(false);
    } else {
      setloginerror(true);
    }
  };
  return (
    <>
      {/* <StatusBar
        backgroundColor="#fff"
        opacity="0.2"
        barStyle="light-content"
      /> */}
      <View style={styles.container}>
        <ImageBackground
          source={require('../../../assests/images/girllawer.jpg')}
          style={styles.image}>
          <View
            style={{
              flex: 1,
              // backgroundColor: '#fafafa'
            }}>
            <View style={{ flex: 1 }}>
              <View style={styles.loginscreentop}>
                <Image
                  source={require('../../../assests/images/girllawer.jpg')}
                  style={styles.logo}
                />
                <Text style={styles.Kanoontext}>
                  Kanoon<Text style={styles.Gurustext}> Gurus</Text>
                </Text>
              </View>

              <View style={styles.loginscreen}>
                <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.loginheading}>Lawyer's Login</Text>
                <Text style={styles.loginmob}>
                  Enter your mobile no. to login
                </Text>
                <View style={styles.inputarea}>
                  <Text style={styles.mobileno}>Mobile No.</Text>
                  <TextInput
                    placeholder={'7508769090'}
                    style={styles.inputboxlogin}
                    keyboardType="numeric"
                    onChangeText={text => loginonchange(text)}
                    value={mobileno}
                    maxLength={10}
                  />
                  {loginerror ? (
                    <Text style={styles.moberror}>
                      Your mobile no. is not registered with us
                    </Text>
                  ) : null}
                  <View style={styles.loginbtn}>
                    <StyledButton
                      type="primary"
                      content={'Login'}
                      onPress={Loginsubmit}
                    />
                  </View>
                  <View style={styles.nothaveaccountcontainer}>
                    <Text style={styles.nothaveaccount}>
                      Don't have account?{' '}
                      <TouchableOpacity>
                        <Text
                          style={styles.haveaccount}
                          onPress={() =>
                            navigation.navigate('RegisterProfile')
                          }>
                          {' '}
                          Register here
                        </Text>
                      </TouchableOpacity>
                    </Text>
                  </View>
                </View>
              </ScrollView>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  loginscreen: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    borderTopRightRadius: 100,
    borderTopLeftRadius: 100,
    marginTop: 20,
  },
  mainlogin: {
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
  },
  Kanoontext: {
    color: '#000',
    fontSize: 30,
    fontWeight: 'bold',
  },
  Gurustext: {
    color: '#ff5500',
  },
  kanoon: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
  },
  loginheading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#292929',
    textAlign: 'center',
    marginTop: 40,
  },
  loginscreentop: {
    alignItems: 'center',
    marginTop: 50,
    width: '100%',
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 50,
  },
  loginmob: {
    color: '#d1d1d1',
    textAlign: 'center',
    marginTop: 5,
  },
  inputarea: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 30,
  },
  nothaveaccountcontainer: {
    marginTop: 60,
    alignItems: 'center',
    flex:1,
    marginBottom: 10
  },
  loginbtn: {
    marginTop: 60,
  },
  mobileno: {
    color: '#d1d1d1',
  },
  nothaveaccount: {
    color: '#d1d1d1',
    fontSize: 15,
  },
  haveaccount: {
    color: '#000',
    fontWeight: 'bold',
  },
  moberror: {
    color: '#FF0000',
    textAlign: 'center',
    marginTop: 5,
  },
  inputboxlogin: {
    borderBottomWidth: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#e8e8e8',
  },
});
export default Login;
