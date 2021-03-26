import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import Touchablebutton from '../../../components/touchablebutton';
import Articleplanlist from '../../../components/articlelist';

const genderdata = [
  {
    key: '1 month',
    plantype: '2 Article plan for the 1 Month',
    plandes: 'Rs 2200 for 2 (500 words each Article)',
  },
  {
    key: '2 month',
    plantype: '6 Article plan for the 3 Month',
    plandes: 'Rs 6600 for 6 (500 words each Article)',
  },
  {
    key: '6 month',
    plantype: '12 Article plan for the 6 Month',
    plandes: 'Rs 12200 for 12 (500 words each Article)',
  },
  {
    key: 'none',
    plantype: 'None',
  },
];
const Subscriptionmarketing = ({navigation}) => {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const onSelect = item => {
    if (selectedOption && selectedOption.key === item.key) {
      setSelectedOption(null);
    } else {
      setSelectedOption(item);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerprofile}>
          <View style={styles.marplan}>
            <Text style={styles.baseplan}>PR and Marketing Plans</Text>
            <Text style={styles.baseplantextOptional}>Optional</Text>
          </View>
          <Text style={styles.baseplantext}>
            Please Select the Marketing Plan
          </Text>
          <View style={styles.profilecontainer}>
            <View style={styles.articlelist}>
              <Articleplanlist
                selectedOption={selectedOption}
                onSelect={onSelect}
                options={genderdata}
              />
            </View>
          </View>
          <View style={styles.bottombtn}>
            <Touchablebutton
              content={'Skip'}
              onPress={() => navigation.goBack()}
            />
            <Touchablebutton
              content={'Next'}
              type={'next'}
              onPress={() => navigation.navigate('Feessummery')}
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
  baseplantextOptional: {
    color: '#949494',
  },
  marplan: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  baseplan: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#3b3b3b',
  },
  baseplantext: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#949494',
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
export default Subscriptionmarketing;
