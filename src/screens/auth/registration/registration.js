import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert
} from 'react-native';
import RadioButton from '../../../components/Radiobutton';
import genderdata from '../../../staticdata/genderdata';
import Registrationindicator from '../../../components/Registrationindicator';
import Entypo from 'react-native-vector-icons/Entypo';
import Touchablebutton from '../../../components/touchablebutton';
import * as ImagePicker from 'react-native-image-picker';

const RegisterProfile = ({navigation}) => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const [imageSource, setImageSource] = useState(null);
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

  function selectImage() {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      mediaType: 'vidio',
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.base64) {
        console.log('response.base64: ', response.base64);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = {uri: response.uri};
        console.log(source.uri);
        // ADD THIS
        setImageSource(source.uri);
      }
    });
  }

  return (
    <View style={styles.container}>
      <Registrationindicator />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerprofile}>
          <View style={styles.profilelogo}>
            <TouchableOpacity onPress={selectImage}>
              <Entypo
                name="edit"
                size={25}
                color="#000"
                style={styles.userprofileedit}
              />
            </TouchableOpacity>
            {imageSource === null ? (
              <Entypo
                name="user"
                size={60}
                color="#000"
                style={styles.userprofile}
              />
            ) : (
                <Image source={{uri: imageSource}} style={styles.selectimage} />
            )}
          </View>

          <View style={styles.profilecontainer}>
            <Text style={styles.personaldetailstext}>Personal Deatils</Text>
            <View style={styles.inputaera}>
              <Text style={styles.inputlabel}>Full name</Text>
              <TextInput
                placeholder={'enter the name'}
                style={styles.inputboxlogin}
                maxLength={10}
              />
            </View>

            <View style={styles.inputaera}>
              <Text style={styles.inputlabel}>Email</Text>
              <TextInput
                placeholder={'enter the email'}
                style={styles.inputboxlogin}
                maxLength={10}
              />
            </View>

            <View style={styles.inputaera}>
              <Text style={styles.inputlabel}>Mobile No.</Text>
              <TextInput
                placeholder={'enter mob no'}
                style={styles.inputboxlogin}
                maxLength={10}
              />
            </View>

            <Text style={styles.genderselect}>Gender</Text>
            <RadioButton
              selectedOption={selectedOption}
              onSelect={onSelect}
              options={genderdata}
            />
          </View>

          <View style={styles.bottombtn}>
            <Touchablebutton
              content={'Back'}
              onPress={() => navigation.goBack()}
            />

            <Touchablebutton
              content={'Next'}
              type={'next'}
              onPress={() => navigation.navigate('Professionaldetails')}
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
  selectimage:{
    height: 125,
    width : 125,
    resizeMode:'cover',
    borderRadius : 60,
    marginLeft :4,
    marginTop:-24,
    zIndex: 200
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
    zIndex : 1000
  },
  personaldetailstext: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 25,
    paddingTop: 100,
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

  profilelogo: {
    height: 130,
    width: 130,
    backgroundColor: '#fff',
    borderRadius: 90,
    backgroundColor: '#fff',
    zIndex: 100,
    elevation: 2,
  },
  profilecontainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: -80,
  },
  profilebtn: {
    flexDirection: 'row',
  },
  inputboxlogin: {
    borderBottomWidth: 1,
  },

  containerradiao: {
    marginBottom: 35,
    flexDirection: 'row',
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
});
export default RegisterProfile;
