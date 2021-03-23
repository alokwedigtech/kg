import React from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {StyleSheet} from 'react-native'
const Dropdownpicker = ({placeholder}) => {
  return (
    <DropDownPicker
      items={[
        {
          label: 'USA',
          value: 'usa',
          hidden: true,
        },
        {
          label: 'UK',
          value: 'uk',
        },
        {
          label: 'France',
          value: 'france',
        },
      ]}
      placeholder={placeholder}
      containerStyle={{height: 50, border:0}}
      style={styles.dropdownpicker}
      itemStyle={{
        justifyContent: 'flex-start',
      }}
      dropDownStyle={{backgroundColor: '#fff'}}
    />
  );
};

const styles=StyleSheet.create({
    dropdownpicker:{
        backgroundColor: '#fff',
        // borderRadius: 
        // paddingVertical: 10
    }
})
export default Dropdownpicker