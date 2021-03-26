import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Touchablefullbutton from '../../../components/Fullbutton';
import Dropdownpicker from '../../../components/dropdown';

const Subscriptionplan = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerprofile}>
          <Text style={styles.baseplan}>Base plan</Text>
          <View style={styles.profilecontainer}>
            <Text style={styles.plantype}>Free plan</Text>
            <View style={styles.undeline}></View>
            <View style={styles.pricecontainer}>
              <Text style={styles.planpricelabel}>Price</Text>
              <Text style={styles.planprice}>Free</Text>
            </View>
            <View style={styles.plandetail}>
              <Text style={styles.plandetailheading}>Details</Text>
              <Text style={styles.plandetailtext}>
                Lawyer will get 50% of the consultancy fees
              </Text>
              <Text style={styles.plandetailtext}>
                Lawyer will not be eligible for KG Verified badge
              </Text>
            </View>

            <View style={styles.plandetail}>
              <Text style={styles.plandetailheading}>Benefits</Text>
              <Text style={styles.plandetailtext}>
                We are working on drop in backgrounds
              </Text>
              <Text style={styles.plandetailtext}>
                We are working on drop in backgrounds
              </Text>
            </View>

            <View style={styles.bottombtn}>
              <Touchablefullbutton
                content={'Next'}
                type={'next'}
                onPress={() => navigation.navigate('Subscriptionmarketing')}
              />
            </View>
          </View>
        </View>

        <View style={styles.containerprofile}>
          <View style={styles.profilecontainer}>
            <Text style={styles.plantype}>Premium plan</Text>
            <View style={styles.undeline}></View>
            <View style={styles.pricecontainer}>
              <Text style={styles.planpricelabel}>Price</Text>
              <Text style={styles.planprice}>$399 /-</Text>
            </View>
            <View style={styles.plandetail}>
              <Text style={styles.plandetailheading}>Details</Text>
              <Text style={styles.plandetailtext}>
                Lawyer will get 50% of the consultancy fees
              </Text>
              <Text style={styles.plandetailtext}>
                Lawyer will not be eligible for KG Verified badge
              </Text>
            </View>
            <View style={styles.plandetail}>
              <Text style={styles.plandetailheading}>Benefits</Text>
              <Text style={styles.plandetailtext}>
                We are working on drop in backgrounds
              </Text>
              <Text style={styles.plandetailtext}>
                We are working on drop in backgrounds
              </Text>
            </View>

            <View style={styles.selectcitiescontainer}>
              <Text style={styles.selectcities}>Select Cities</Text>
              <Dropdownpicker
                placeholder={'Pratice state'}
                style={styles.dropdownselect}
              />
            </View>

            <View style={styles.bottombtn}>
              <Touchablefullbutton
                content={'Next'}
                type={'next'}
                onPress={() => navigation.navigate('Subscriptionmarketing')}
              />
            </View>
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
  timeslotday: {
    marginLeft: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
  baseplan: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#3b3b3b',
  },
  undeline: {
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    width: '100%',
  },
  selectcities: {
    marginTop: 12,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  dropdownselect: {
    marginTop: 15,
  },
  pricecontainer: {
    marginTop: 20,
  },
  selectcitiescontainer: {
    marginTop: 25,
  },
  planpricelabel: {
    fontSize: 15,
    color: '#808080',
  },
  plandetail: {
    marginTop: 20,
  },
  planprice: {
    fontSize: 25,
    color: '#4b4b4b',
    fontWeight: 'bold',
  },
  plandetailheading: {
    fontSize: 18,
    color: '#000',
    fontWeight: 'bold',
  },
  plandetailtext: {
    fontSize: 15,
    color: '#808080',
    marginTop: 5,
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
  plantype: {
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
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
export default Subscriptionplan;
