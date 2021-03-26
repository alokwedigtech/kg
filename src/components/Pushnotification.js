import React from 'react';
import {View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';

const Pushnotification = ({item}) => {
  return (
    <>
      <Text>
       {item.message}
      </Text>
      <View style={styles.undeline}></View>
    </>
  );
};

const styles = StyleSheet.create({
    undeline: {
      borderBottomWidth: 1,
      borderColor: '#f5f5f5',
      width: '100%',
      marginTop: 10,
    },
  });
export default Pushnotification
