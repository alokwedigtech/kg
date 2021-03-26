import React from 'react';
import {Text, TouchableOpacity,StyleSheet} from 'react-native';

const Touchablefullbutton = (props) => {
    const {type, content, onPress} = props;

  const backgroundColor = type === 'next' ? '#fd551f' : '#2f2f2f';
  const textColor = type === 'next' ? '#FFFFFF' : '#fff';
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
    width: '100%',
  },
  buttontext: {
    textAlign: 'center',
    color: '#000',
    fontSize: 15,
    fontWeight: 'bold',
  },
 
});
export default Touchablefullbutton;
