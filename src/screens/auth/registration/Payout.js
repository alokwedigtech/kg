import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView,FlatList} from 'react-native';
import Touchablefullbutton from '../../../components/Fullbutton';
import Dropdownpicker from '../../../components/dropdown';
import Payoutuser from '../../../components/Payoutuser'
import payoutusers from '../../../staticdata/payoutusers'


const Payout = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.containerprofile}>
          <FlatList
            data={payoutusers}
            renderItem={Payoutuser}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            // extraData={selectedId}
          />
           <View style={styles.bottombtn}>
              <Touchablefullbutton
                content={'Next'}
                type={'next'}
                onPress={() => navigation.navigate('Avsetting')}
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
  containerprofile: {
    marginTop: 30,
    paddingHorizontal: 20,
  },
});
export default Payout;
