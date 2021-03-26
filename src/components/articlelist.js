import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function Articleplanlist({ options, selectedOption, onSelect }) {
  return (
    <View style={styles.buttonContainer1}>
      {options.map((item) => {
        return (
          <View key={item.key} style={styles.buttonContainer}>
           
            <TouchableOpacity
              style={styles.circle}
              onPress={() => {
                onSelect(item);
              }}>
              {selectedOption && selectedOption.key === item.key && (
                <View style={styles.checkedCircle} />
              )}
            </TouchableOpacity>
            <View>
            <Text>{item.plantype}</Text>
            <Text>{item.plandes}</Text>
                </View>
            
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    marginTop : 30
    // justifyContent:'flex-start'
  },
  buttonContainer1: {
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    // alignItems :'center'
  },

  circle: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight:10
  },

  checkedCircle: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#000',
  },
});
