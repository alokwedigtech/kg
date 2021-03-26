import React,{useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Touchablefullbutton from '../../../components/Fullbutton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ModalConfrimAlert from '../../../components/ModalConfirmation'
import { TouchableOpacity } from 'react-native';

const QandA = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerprofile}>
          <View style={styles.profilecontainer}>
            <Text style={styles.personaldetailstext}>Q and a</Text>
            <View style={styles.consultdatecontainer}>
              <Text style={styles.datetimetext}>Date and time</Text>
              <Text style={styles.date}>18-12-2020 | 10:30 am</Text>
            </View>

            <View style={styles.referencecontainer}>
                
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
  containerprofile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  consultdatecontainer: {
    marginTop: 20,
  },
  downloaddocs: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 50,
  },
  downloadtext: {
    marginLeft: 5,
    borderBottomWidth: 1,
    borderColor: '#a7a7a7',
  },
  referencecontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  date: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  datetimetext: {
    color: '#a7a7a7',
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
    marginBottom: 30,
  },
  bottombtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    width: '100%',
    marginBottom: 25,
  },
});
export default QandA;
