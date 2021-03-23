import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Registrationindicator from '../../../components/Registrationindicator';
import Touchablebutton from '../../../components/touchablebutton';

const Council = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Registrationindicator />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerprofile}>
          <View style={styles.profilecontainer}>
            <Text style={styles.personaldetailstext}>Bar Council ID</Text>
            <Text style={styles.socialmediastext}>
              This will increase the KG rating
            </Text>
            <View>
              <TouchableOpacity style={styles.uploadbtn}>
                <Text style={styles.uploadtext}>Upload Image</Text>
              </TouchableOpacity>
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
            onPress={() => navigation.navigate('Selfassestement')}
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
  uploadbtn: {
    padding: 13,
    backgroundColor: '#2f2f2f',
    borderRadius: 20,
    marginTop: 40,
  },
  uploadtext: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
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
});
export default Council;
