import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import Registrationindicator from '../../../components/Registrationindicator';
import Touchablebutton from '../../../components/touchablebutton';

const About = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Registrationindicator />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerprofile}>
          <View style={styles.profilecontainer}>
            <View style={styles.inputaera}>
              <Text style={styles.inputlabelabout}>About You</Text>
              <TextInput
                placeholder={'1000 words'}
                style={styles.inputboxlogin}
                maxLength={10}
              />
            </View>
          </View>
          <View style={styles.bottombtn}>
            <Touchablebutton
              content={'Back'}
              onPress={() => navigation.goBack()}
            />
            <Touchablebutton
              content={'Next'}
              type={'next'}
              onPress={() => navigation.navigate('Socialmedia')}
            />
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
  bottombtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    width: '100%',
    marginBottom: 25,
  },
  inputlabelabout: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  containerprofile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    paddingHorizontal: 20,
  },
  userprofile: {
    alignSelf: 'center',
  },
  inputaera: {
    marginTop: 10,
    height: 150,
  },
  userprofileedit: {
    alignSelf: 'flex-end',
    paddingRight: 20,
  },
  inputlabel: {
    color: '#c1c1c1',
    fontSize: 15,
  },
  profilecontainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  inputboxlogin: {
    borderBottomWidth: 1,
  },
});
export default About;
