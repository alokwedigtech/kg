import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView,FlatList} from 'react-native';
import Registrationindicator from '../../../components/Registrationindicator';
import Touchablebutton from '../../../components/touchablebutton';
import Touchablefullbutton from '../../../components/Fullbutton';
import {TouchableOpacity} from 'react-native';
import Pushnotification from '../../../components/Pushnotification'
import pushnotificationmessage from '../../../staticdata/pushnotification'
const Notification = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
      <View style={styles.containerprofile}>
        <View style={styles.profilecontainer}>
          <View style={styles.inputaera}>
            <Text style={styles.inputlabelabout}>New Request</Text>
           
              <View style={styles.notificationpersonal}>
                <Text style={styles.notificationname}>Ramesh Chandra</Text>
                <Text style={styles.notificationdate}>18-12-2020 | 06:20 am</Text>
              </View>
              <View style={styles.notificationbuttons}>
                <TouchableOpacity>
                  <Text style={styles.notificationDeclined}>Declined</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.notificationDeclined1}>Accept</Text>
                </TouchableOpacity>
              </View>

               <View style={styles.notificationpersonal}>
                <Text style={styles.notificationname}>Ramesh Chandra</Text>
                <Text style={styles.notificationdate}>18-12-2020 | 06:20 am</Text>
              </View>
              <View style={styles.notificationbuttons}>
                <TouchableOpacity>
                  <Text style={styles.notificationDeclined}>Declined</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.notificationDeclined1}>Accept</Text>
                </TouchableOpacity>
              </View> 
            </View>
         
        </View>

        <View style={styles.profilecontainer1}>
          <View style={styles.inputaera}>
            <Text style={styles.inputlabelabout}>Remainder</Text>
            <View style={styles.pushnotification}>
              <FlatList
                data={pushnotificationmessage}
                renderItem={Pushnotification}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                // extraData={selectedId}
              />
            </View>
          </View>
        </View>

        <View style={styles.bottombtn}>
          <Touchablefullbutton 
          content={'Save'} 
          type={'next'} 
          onPress={()=>navigation.navigate('Registrationdone')}
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
  pushnotification: {
    marginTop: 25,
  },
  notificationpersonal:{
    marginTop: 15
  },
  notificationbuttons:{
    flexDirection :'row',
    justifyContent :'space-between',
    marginTop: 20,
    borderWidth : 2,
    width : '100%'
  },
  notificationdate:{
    color :'#9c9c9c'
  },
  notificationDeclined:{
    // borderColor:'red',
    borderRightWidth: 1,
    padding : 15,
    fontSize:16,
    fontWeight:'bold'
    // width : '100%'
  },
  notificationDeclined1:{
    borderColor:'red',
    // borderRightWidth: 1,
    fontSize:16,
    fontWeight:'bold',
    padding : 15,
    width : '100%',
    color:'#fd551f'
  },
  undeline: {
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    width: '100%',
    marginTop: 10,
  },
  notificationname:{
    fontSize : 15,
    fontWeight : 'bold'
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
    // marginTop : 30
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
    // marginTop: 10,
    // height: 150,
  },
  userprofileedit: {
    alignSelf: 'flex-end',
    paddingRight: 20,
  },
  inputlabel: {
    color: '#c1c1c1',
    fontSize: 15,
  },
  profilecontainer1: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 30,
    // height : 300,
    // flex :1
  },
  profilecontainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 30,
    // height : 200,
    // flex :1
  },
  inputboxlogin: {
    borderBottomWidth: 1,
    // textAlign:'right'
  },
});
export default Notification;
