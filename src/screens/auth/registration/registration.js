import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
} from 'react-native';
import RadioButton from '../../../components/Radiobutton';
import genderdata from '../../../staticdata/genderdata';
import StyledButton from '../../../components/Button';
const RegisterProfile = () => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const onSelect = item => {
    if (selectedOption && selectedOption.key === item.key) {
      setSelectedOption(null);
    } else {
      setSelectedOption(item);
    }
  };

  const onSubmit = () => {
    console.log(selectedOption);
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
    <View style={styles.container}>
      <View style={styles.containerprofile}>
        <View style={styles.profilelogo}></View>
        <View style={styles.profilecontainer}>
          <Text>Personal Deatils</Text>
          <Text style={styles.mobileno}>Mobile No.</Text>
          <TextInput
            placeholder={'7508769090'}
            style={styles.inputboxlogin}
            maxLength={10}
          />

          <Text style={styles.mobileno}>Mobile No.</Text>
          <TextInput
            placeholder={'7508769090'}
            style={styles.inputboxlogin}
            maxLength={10}
          />

          <Text style={styles.mobileno}>Mobile No.</Text>
          <TextInput
            placeholder={'7508769090'}
            style={styles.inputboxlogin}
            maxLength={10}
          />
          <Text>Gender</Text>
          <View style={styles.radiobtn}>
            <RadioButton
              selectedOption={selectedOption}
              onSelect={onSelect}
              options={genderdata}
            />
          </View>
        </View>
        <Text>ssdsddsdd</Text>
        {/* <View style={styles.profilebtn}> */}
          <StyledButton
            type="primary"
            content={'Login'}
            onPress={Loginsubmit}
          />
        {/* </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  containerprofile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
    paddingHorizontal: 20,
  },
  profilelogo: {
    height: 170,
    width: 170,
    backgroundColor: 'red',
    borderRadius: 150,
    // marginTop: -30
  },
  profilecontainer: {
    // height: 150,
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 40,
  },
  profilebtn: {
    flexDirection: 'row',
  },
  inputboxlogin: {
    borderBottomWidth: 1,
  },

  containerradiao: {
    marginBottom: 35,
    // alignItems: 'center',
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  radioText: {
    marginRight: 5,
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
  },
  radioCircle: {
    height: 20,
    width: 20,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 8,
    height: 8,
    borderRadius: 50,
    backgroundColor: '#000',
  },
  result: {
    marginTop: 20,
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#F3FBFE',
  },
  radiobtn: {
    flexDirection: 'row',
  },
});
export default RegisterProfile;
