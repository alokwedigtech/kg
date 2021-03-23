import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import Registrationindicator from '../../../components/Registrationindicator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Touchablebutton from '../../../components/touchablebutton';

const Socialmedia = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Registrationindicator />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerprofile}>
          <View style={styles.profilecontainer}>
            <Text style={styles.personaldetailstext}>Social Media Links</Text>
            <Text style={styles.socialmediastext}>
              This will increase the KG rating
            </Text>

            <View style={styles.inputaera}>
              <FontAwesome
                name="facebook"
                size={25}
                color="#4665ac"
                style={styles.userprofileedit}
              />
              <TextInput
                placeholder={'Facebook'}
                style={styles.inputboxlogin}
                maxLength={10}
              />
            </View>

            <View style={styles.inputaera}>
              <FontAwesome
                name="twitter"
                size={25}
                color="#4baaf4"
                style={styles.userprofileedit}
              />
              <TextInput
                placeholder={'Twitter'}
                style={styles.inputboxlogin}
                maxLength={10}
              />
            </View>

            <View style={styles.inputaera}>
              <FontAwesome
                name="linkedin"
                size={25}
                color="#1176b7"
                style={styles.userprofileedit}
              />
              <TextInput
                placeholder={'Linkedin'}
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
              onPress={() => navigation.navigate('Council')}
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
  socialmediastext: {
    color: '#808080',
  },
  inputlabelabout: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  containerprofile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  userprofile: {
    alignSelf: 'center',
  },
  inputaera: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
  },
  userprofileedit: {
    width: '10%',
  },
  personaldetailstext: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
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
    width: '90%',
  },
});
export default Socialmedia;
