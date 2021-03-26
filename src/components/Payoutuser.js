import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const Payoutuser = ({item}) => {
  return (
    <>
      <View style={styles.paymentuserinfo}>
        <Text style={styles.paymentusername}>{item.name}</Text>
        <Text style={styles.paymentusername}>{item.amount}</Text>
      </View>
      <View style={styles.paymentuserinfo}>
        <Text style={styles.paymentdate}>{item.date}</Text>
        <Text style={styles.paymentstatus}>{item.status}</Text>
      </View>
      <Text style={styles.paymentplantype}>
        Plan<Text style={styles.paymentplantypeplatnium}>{} - {item.plantype}</Text></Text>
      <View style={styles.undeline}></View>
    </>
  );
};

const styles = StyleSheet.create({
    paymentuserinfo:{
        flexDirection :'row',
        justifyContent :'space-between'
    },
    paymentusername:{
        fontSize : 16,
        fontWeight :'bold'
    },
    paymentdate:{
        color :'#cccccc'
    },
    paymentstatus:{
        color :'green'
    },
    paymentplantype:{
      color :'#cccccc'
    },
    paymentplantypeplatnium:{
        color :'#000'
    },
    undeline: {
      borderBottomWidth: 1,
      borderColor: '#cccccc',
      width: '100%',
      marginTop : 15,
      marginBottom: 15
    },
})

export default Payoutuser
