import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Touchablefullbutton from '../../components/Fullbutton';

const Underreview = ({navigation}) => {
  return (
    <View style={styles.container}>
    <View style={styles.containerprofile}>
      <View style={styles.profilecontainer}>
        <View style={styles.inputaera}>
          <Text style={styles.inputlabelabout}>Your Profile Is Under Review</Text>
          <Text style={styles.thanksmessage}>
           Our team will notify you when your profile is approved.
          </Text>
        </View>
      </View>
      <View style={styles.bottombtn}>
        <Touchablefullbutton
          content={'Continue'}
          type={'next'}
          onPress={() => navigation.navigate('Consultdash')}
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
      thanksmessage:{
          marginTop : 15, textAlign :'center',
          fontSize : 18,
          color:'#000'
        //   color:'#6b6b6b'
      },
      inputlabelabout: {
        fontSize:30,
        color: '#fd551f',
        fontWeight: 'bold',
        textAlign :'center'
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
export default Underreview;
