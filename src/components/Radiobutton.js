import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default function RadioButtons({ options, selectedOption, onSelect }) {
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
            <Text>{item.text}</Text>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonContainer1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
