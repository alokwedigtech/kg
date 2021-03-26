import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Registrationindicator from '../../../components/Registrationindicator';
import Touchablebutton from '../../../components/touchablebutton';
import RadioButton from '../../../components/Radiobutton';

const Selfassestement = ({navigation}) => {
  const questionsoptions = [
    {
      key: 'Male',
      text: '32',
    },
    {
      key: 'female',
      text: '877',
    },
    {
      key: 'other',
      text: '98',
    },
    {
      key: 'ss',
      text: '784',
    },

  ];
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
      <Registrationindicator />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.selfasscontainer}>
          <Text style={styles.selfassheading}>Self Assessment</Text>
          <View style={styles.selfasscontainerfield}>
            <View>
              <Text style={styles.selfasstext}>Pratica Anna</Text>
              <Text style={styles.selfassbranch}>Civil</Text>
            </View>
            <View>
              <Text style={styles.selfasstext}>Total Questions</Text>
              <Text style={styles.selfassbranch}>5/25</Text>
            </View>
            <View></View>
          </View>
        </View>
        <View style={styles.containerprofile}>
          <View style={styles.profilecontainer}>
            <Text style={styles.selfquestion}>
              How many Constitution does India have
            </Text>
              <RadioButton
                selectedOption={selectedOption}
                onSelect={onSelect}
                options={questionsoptions}
              />
          </View>

          <View style={styles.profilecontainer}>
            <Text style={styles.selfquestion}>
              How many Constitution does India have
            </Text>
              <RadioButton
                selectedOption={selectedOption}
                onSelect={onSelect}
                options={questionsoptions}
              />
          </View>

          

          
          
        
      
          
       

          <View style={styles.bottombtn}>
            <Touchablebutton
              content={'Back'}
              onPress={() => navigation.goBack()}
            />
            <Touchablebutton
              content={'Next'}
              type={'next'}
              onPress={() => navigation.navigate('Verifyotp')}
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
  selfasscontainer: {
    marginTop: 30,
    paddingHorizontal: 20,
    width: '100%',
  },
  selfassheading: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  selfasscontainerfield: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  selfasstext: {
    fontSize: 12,
    color: '#808080',
  },
  selfassbranch: {
    fontSize: 15,
    fontWeight: 'bold',
    marginTop: 5,
  },
  bottombtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    width: '100%',
    marginBottom: 25,
  },
  containerprofile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  selfquestion: {
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
    marginTop: 30
  },
});

export default Selfassestement;
