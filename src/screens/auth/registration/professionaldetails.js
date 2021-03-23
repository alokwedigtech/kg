import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
} from 'react-native';
import Registrationindicator from '../../../components/Registrationindicator';
import Dropdownpicker from '../../../components/dropdown';
import Touchablebutton from '../../../components/touchablebutton';

const Professionaldetails = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('java');

  return (
    <View style={styles.container}>
      <Registrationindicator />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerprofile}>
          <View style={styles.profilecontainer}>
            <Text style={styles.personaldetailstext}>Professional Details</Text>
            <View style={styles.inputaera}>
              <Dropdownpicker placeholder={'Practising since'} />
            </View>

            <View style={styles.inputaera}>
              <TextInput
                placeholder={'Bar Enrolment No.'}
                style={styles.inputboxlogin}
                maxLength={10}
              />
            </View>

            <View style={styles.inputaera}>
              <Dropdownpicker placeholder={'Bar Enrolment State'} />
            </View>

            <View style={styles.inputaera}>
              <TextInput
                placeholder={'Fees Amount'}
                style={styles.inputboxlogin}
                maxLength={10}
              />
            </View>

            <View style={styles.inputaera}>
              <Dropdownpicker placeholder={'Languages'} />
            </View>

            <View style={styles.inputaera}>
              <Dropdownpicker placeholder={'Pratice area'} />
            </View>

            <View style={styles.inputaera}>
              <Dropdownpicker placeholder={'Pratice state'} />
            </View>

            <View style={styles.inputaera}>
              <TextInput
                placeholder={'Address 1'}
                style={styles.inputboxlogin}
                maxLength={10}
              />
            </View>
            <View style={styles.inputaera}>
              <TextInput
                placeholder={'Address 2'}
                style={styles.inputboxlogin}
                maxLength={10}
              />
            </View>
            <View style={styles.inputaera}>
              <TextInput
                placeholder={'Pin Code'}
                style={styles.inputboxlogin}
                maxLength={10}
              />
            </View>

            <View style={styles.inputaera}>
              <Dropdownpicker placeholder={'City'} />
            </View>

            <View style={styles.inputaera}>
              <Dropdownpicker placeholder={'State'} />
            </View>

            <View style={styles.inputaera}>
              <Dropdownpicker placeholder={'Country'} />
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
              onPress={() => navigation.navigate('About')}
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
  },
  userprofileedit: {
    alignSelf: 'flex-end',
    paddingRight: 20,
  },
  personaldetailstext: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 25,
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
export default Professionaldetails;
