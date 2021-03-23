import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
  Picker,
} from 'react-native';
import RadioButton from '../../../components/Radiobutton';
import genderdata from '../../../staticdata/genderdata';
import StyledButton from '../../../components/Button';
import Registrationindicator from '../../../components/Registrationindicator';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Dropdownpicker from '../../../components/dropdown';
import {Sae} from 'react-native-textinput-effects';
import Touchablefullbutton from '../../../components/Fullbutton'

const Timeslot = ({navigation}) => {
  const [selectedValue, setSelectedValue] = useState('java');

  return (
    <View style={styles.container}>
      <Registrationindicator />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerprofile}>
          <View style={styles.profilecontainer}>
            <Text style={styles.personaldetailstext}>Time Slot</Text>
            <Text style={styles.socialmediastext}>
              This will increase the KG rating
            </Text>
          </View>

          <View style={styles.bottombtn}>


            <Touchablefullbutton
              content={'Exceptional Dates'}
            //   type={'next'}
            //   onPress={() => navigation.navigate('Timeslot')}
            />
          </View>
          <View style={styles.bottombtn}>
          <Touchablefullbutton
              content={'Next'}
              type={'next'}
            //   onPress={() => navigation.navigate('Timeslot')}
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
    marginTop: 10,
    width: '100%',
    // flex :1,
    marginBottom: 25,
    // position: 'absolute',
    // bottom : 0
  },
  uploadbtn: {
    padding: 13,
    backgroundColor: '#000',
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
    color: '#e0e0e0',
  },
  inputlabelabout: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },

  backbtn: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 15,
    width: '45%',
    // textAlign :'center'
  },
  backtext: {
    textAlign: 'center',
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
  nexttext: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
  nextbtn: {
    backgroundColor: '#fc5820',
    padding: 15,
    borderRadius: 15,
    width: '50%',
    // textAlign :'center'
  },
  containerprofile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  userprofile: {
    alignSelf: 'center',
    // margin: 10
  },
  inputaera: {
    marginTop: 10,
    // height: 150,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
  },
  userprofileedit: {
    // alignSelf: 'flex-end',
    // paddingRight: 20,
    width: '10%',
  },
  personaldetailstext: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  genderselect: {
    fontSize: 18,
    color: '#c1c1c1',
    marginTop: 20,
    marginBottom: 20,
  },
  inputlabel: {
    color: '#c1c1c1',
    fontSize: 15,
  },

  profilecontainer: {
    // height: 150,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    // marginTop:-50
    // marginBottom: -40,
  },

  inputboxlogin: {
    borderBottomWidth: 1,
    width: '90%',
  },
});
export default Timeslot;
