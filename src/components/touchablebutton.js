import React from 'react';
import {Text, TouchableOpacity,StyleSheet} from 'react-native';

const Touchablebutton = (props) => {
    const {type, content, onPress} = props;

  const backgroundColor = type === 'next' ? '#fc5820' : '#f5f5f5';
  const textColor = type === 'next' ? '#FFFFFF' : '#000';
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: backgroundColor}]}>
      <Text style={[styles.buttontext, {color: textColor}]} onPress={onPress}>
        {content}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 15,
    borderRadius: 15,
    width: '50%',
  },
  buttontext: {
    textAlign: 'center',
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
 
});
export default Touchablebutton;
