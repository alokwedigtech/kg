import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Touchablefullbutton from '../../../components/Fullbutton';

const Feessummery = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerprofile}>
          <Text style={styles.baseplan}>Subscription Fees Summary</Text>

          <View style={styles.profilecontainer}>
            <View style={styles.premiumrow}>
              <Text style={styles.premiumheading}>Premium plan</Text>
              <Text style={styles.premiumprice}>$399.0</Text>
            </View>
            <View style={styles.premiumrow}>
              <Text style={styles.premiumheading}>City(100*7)</Text>
              <Text style={styles.premiumprice}>$700</Text>
            </View>
            <View style={styles.premiumrow}>
              <View>
                <Text style={styles.premiumheading}>Add-on plan</Text>
                <Text>2 article plan for 1 Month</Text>
              </View>

              <Text style={styles.premiumprice}>$2200</Text>
            </View>
            <View style={styles.undeline}></View>
            <View style={styles.premiumrow}>
              <Text style={styles.premiumheading}>Subtotal (INR)</Text>
              <Text style={styles.premiumprice}>$3299</Text>
            </View>
          </View>

          <Text style={styles.paragraph}>
            {' '}
            The Paragraphs module allows content creators to choose which kinds
            of paragraphs they want to place on the page, and the order in which
            they want to place them. They can do all of this through the
            familiar node edit screen. There is no need to resort to code
          </Text>
          <View style={styles.bottombtn}>
            <Touchablefullbutton
              content={'Pay Now'}
              type={'next'}
              onPress={() => navigation.navigate('Payout')}
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
  premiumrow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  premiumheading: {
    fontSize: 14,
    color: '#838383',
  },
  premiumprice: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  undeline: {
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    width: '100%',
    marginTop: 40,
  },
  paragraph: {
    marginTop: 20,
  },
  bottombtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 50,
    width: '100%',
    marginBottom: 25,
  },
  containerprofile: {
    marginTop: 30,
    paddingHorizontal: 20,
  },

  profilecontainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 20,
  },
});
export default Feessummery;
