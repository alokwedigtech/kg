import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import Registrationindicator from '../../../components/Registrationindicator';
import Touchablebutton from '../../../components/touchablebutton';
import Touchablefullbutton from '../../../components/Fullbutton'
const Avsetting = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.containerprofile}>
          <View style={styles.profilecontainer}>
            <View style={styles.inputaera}>
              <Text style={styles.inputlabelabout}>Audio and vidio</Text>
              <TextInput
                placeholder={'Yogi Kumar'}
                style={styles.inputboxlogin}
                maxLength={1000}
                multiline={true}
                numberOfLines={3}
              />
            </View>
          </View>
          <View style={styles.bottombtn}>
            <Touchablefullbutton
            content={"Save"}
            type={"next"}
            onPress={()=>navigation.navigate('Notification')}
            />
          </View>
        </View>
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
    marginTop: 50,
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
    // textAlign:'right'
  },
});
export default Avsetting;
