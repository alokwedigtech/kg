// import React, {useState,Component} from 'react';
// import {View, Button, Platform} from 'react-native';
// import DateTimePicker from '@react-native-community/datetimepicker';

// export const Timeslot = () => {
//   const [date, setDate] = useState(new Date(1598051730000));
//   const [mode, setMode] = useState('date');
//   const [show, setShow] = useState(false);

//   const onChange = (event, selectedDate) => {
//     const currentDate = selectedDate || date;
//     setShow(Platform.OS === 'ios');
//     setDate(currentDate);
//   };

//   const showMode = (currentMode) => {
//     setShow(true);
//     setMode(currentMode);
//   };

//   const showDatepicker = () => {
//     showMode('date');
//   };

//   const showTimepicker = () => {
//     showMode('time');
//   };

//   return (
//     <View>
//       <View>
//         <Button onPress={showDatepicker} title="Show date picker!" />
//       </View>
//       <View>
//         <Button onPress={showTimepicker} title="Show time picker!" />
//       </View>
//       {show && (
//         <DateTimePicker
//           testID="dateTimePicker"
//           value={date}
//           mode={mode}
//           is24Hour={true}
//           display="default"
//           onChange={onChange}
//         />
//       )}
//     </View>
//   );
// };

// export default Timeslot

import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  Modal,
  Pressable,
} from 'react-native';
import Touchablefullbutton from '../../../components/Fullbutton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Touchablebutton from '../../../components/touchablebutton';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
// import DateTimePicker from '@react-native-community/datetimepicker';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import Entypo from 'react-native-vector-icons/Entypo';
import {CheckBox} from 'react-native-elements';

class Timeslot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      selectedStartDate: null,
      checkedmonday:false,
      checkedtuesday:false
    };
    this.onDateChange = this.onDateChange.bind(this);
  }

  onDateChange(date) {
    this.setState({
      selectedStartDate: date,
    });
  }

  setModalVisible = visible => {
    this.setState({modalVisible: visible});
  };
  render() {
    const {modalVisible} = this.state;
    const {navigation} = this.props;
    const {selectedStartDate} = this.state;
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.containerprofile}>
            <View>
              <Text tyle={styles.socialmediastext}>
                Enter the Time Slot In Which You are Available For Bookings
              </Text>
            </View>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.modalheader}>
                    <Text style={styles.modalTextheading}>
                      Exceptional Dates
                    </Text>
                    <TouchableOpacity>
                      <AntDesign
                        name="close"
                        size={30}
                        color="#000"
                        onPress={() => this.setModalVisible(false)}
                      />
                    </TouchableOpacity>
                  </View>
                  <Text style={styles.modalcalinfo}>
                    Mark the specific dates when you are not available to attend
                    the bookings
                  </Text>
                  <View style={{backgroundColor: 'red', marginTop: 45}}>
                    <CalendarList
                      horizontal={true}
                      pagingEnabled={true}
                      calendarWidth={300}
                      hideArrows={false}
                      hideExtraDays={false}
                      selectedDate={this.state.selectedDate}
                      onPressDate={date => {
                        this.setState({selectedDate: date});
                      }}
                      theme={{
                        arrowColor: '#fd551f',
                      }}
                    />
                  </View>
                  <View style={styles.bottombtn}>
                    <Touchablebutton
                      content={'Cancle'}
                      onPress={() => this.setModalVisible(false)}
                    />
                    <Touchablebutton
                      content={'Update'}
                      type={'next'}
                      onPress={() => this.setModalVisible(false)}
                    />
                  </View>
                </View>
              </View>
            </Modal>

            <View style={styles.profilecontainer}>
              <View style={styles.timeslotavailable}>
             
                <CheckBox
                  checked={this.state.checkedmonday}
                  checkedColor="#fd551f"
                  size={22}
                  uncheckedColor="#000"
                  onPress={()=>this.setState({
                    checkedmonday:!this.state.checkedmonday
                  })}
                />
                <Text style={styles.timeslotday}>Monday</Text>
              </View>
              <View style={styles.timeslotfree}>
                <View>
                  <Text>Slot 1</Text>
                  <TextInput
                    placeholder={'10:00 am'}
                    style={styles.inputboxlogin}
                    keyboardType="numeric"
                    maxLength={10}
                  />
                </View>

                <Text style={styles.timeslotto}>to</Text>
                <TextInput
                  placeholder={'1:00 pm'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
              </View>
              <View style={styles.timeslotfree}>
                <View>
                  <Text>Slot 2</Text>
                  <TextInput
                    placeholder={'10:00 am'}
                    style={styles.inputboxlogin}
                    keyboardType="numeric"
                    maxLength={10}
                  />
                </View>
                <Text style={styles.timeslotto}>to</Text>
                <TextInput
                  placeholder={'1:00 pm'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
              </View>
            </View>

            <View style={styles.profilecontainer}>
              <View style={styles.timeslotavailable}>
              <CheckBox
                  checked={this.state.checkedtuesday}
                  checkedColor="#fd551f"
                  size={22}
                  uncheckedColor="#000"
                  onPress={()=>this.setState({
                    checkedtuesday:!this.state.checkedtuesday
                  })}
                />
                <Text style={styles.timeslotday}>Tuesday</Text>
              </View>
              <View style={styles.timeslotfree}>
                <TextInput
                  placeholder={'10:00 am'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
                <Text style={styles.timeslotto}>to</Text>
                <TextInput
                  placeholder={'1:00 pm'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
              </View>
              <View style={styles.timeslotfree}>
                <TextInput
                  placeholder={'10:00 am'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
                <Text style={styles.timeslotto}>to</Text>
                <TextInput
                  placeholder={'1:00 pm'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
              </View>
            </View>

            <View style={styles.profilecontainer}>
              <View style={styles.timeslotavailable}>
              <CheckBox
                  checked={this.state.checkedmonday}
                  checkedColor="#fd551f"
                  size={22}
                  uncheckedColor="#000"
                  onPress={()=>this.setState({
                    checkedmonday:!this.state.checkedmonday
                  })}
                />
                <Text style={styles.timeslotday}>Wednesday</Text>
              </View>
              <View style={styles.timeslotfree}>
                <TextInput
                  placeholder={'10:00 am'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
                <Text style={styles.timeslotto}>to</Text>
                <TextInput
                  placeholder={'1:00 pm'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
              </View>
              <View style={styles.timeslotfree}>
                <TextInput
                  placeholder={'10:00 am'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
                <Text style={styles.timeslotto}>to</Text>
                <TextInput
                  placeholder={'1:00 pm'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
              </View>
            </View>

            <View style={styles.profilecontainer}>
              <View style={styles.timeslotavailable}>
              <CheckBox
                  checked={this.state.checkedmonday}
                  checkedColor="#fd551f"
                  size={22}
                  uncheckedColor="#000"
                  onPress={()=>this.setState({
                    checkedmonday:!this.state.checkedmonday
                  })}
                />
                <Text style={styles.timeslotday}>Thursday</Text>
              </View>
              <View style={styles.timeslotfree}>
                <TextInput
                  placeholder={'10:00 am'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
                <Text style={styles.timeslotto}>to</Text>
                <TextInput
                  placeholder={'1:00 pm'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
              </View>
              <View style={styles.timeslotfree}>
                <TextInput
                  placeholder={'10:00 am'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
                <Text style={styles.timeslotto}>to</Text>
                <TextInput
                  placeholder={'1:00 pm'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
              </View>
            </View>

            <View style={styles.profilecontainer}>
              <View style={styles.timeslotavailable}>
              <CheckBox
                  checked={this.state.checkedmonday}
                  checkedColor="#fd551f"
                  size={22}
                  uncheckedColor="#000"
                  onPress={()=>this.setState({
                    checkedmonday:!this.state.checkedmonday
                  })}
                />
                <Text style={styles.timeslotday}>Friday</Text>
              </View>
              <View style={styles.timeslotfree}>
                <TextInput
                  placeholder={'10:00 am'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
                <Text style={styles.timeslotto}>to</Text>
                <TextInput
                  placeholder={'1:00 pm'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
              </View>
              <View style={styles.timeslotfree}>
                <TextInput
                  placeholder={'10:00 am'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
                <Text style={styles.timeslotto}>to</Text>
                <TextInput
                  placeholder={'1:00 pm'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
              </View>
            </View>

            <View style={styles.profilecontainer}>
              <View style={styles.timeslotavailable}>
              <CheckBox
                  checked={this.state.checkedmonday}
                  checkedColor="#fd551f"
                  size={22}
                  uncheckedColor="#000"
                  onPress={()=>this.setState({
                    checkedmonday:!this.state.checkedmonday
                  })}
                />
                <Text style={styles.timeslotday}>Satuday</Text>
              </View>
              <View style={styles.timeslotfree}>
                <TextInput
                  placeholder={'10:00 am'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
                <Text style={styles.timeslotto}>to</Text>
                <TextInput
                  placeholder={'1:00 pm'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
              </View>
              <View style={styles.timeslotfree}>
                <TextInput
                  placeholder={'10:00 am'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
                <Text style={styles.timeslotto}>to</Text>
                <TextInput
                  placeholder={'1:00 pm'}
                  style={styles.inputboxlogin}
                  keyboardType="numeric"
                  maxLength={10}
                />
              </View>
            </View>

            <View style={styles.bottombtn}>
              {/* <TouchableOpacity onPress={() => this.setModalVisible(true)}>
                <Text>calender</Text>
              </TouchableOpacity> */}

              <Touchablefullbutton
                content={'Exceptional Dates'}
                onPress={() => this.setModalVisible(true)}
              />
            </View>
            <View style={styles.bottombtn}>
              <Touchablefullbutton
                content={'Next'}
                type={'next'}
                onPress={() => navigation.navigate('Subscriptionplan')}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 22,
  },
  datepickerstyle: {
    height: 100,
    width: 100,
    flex: 1,
  },
  modalcalinfo: {
    marginTop: 20,
  },
  modalTextheading: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    height: '100%',
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalheader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  timeslotday: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  timeslotfree: {
    flexDirection: 'row',
    marginTop: 20,
    // alignItems:'center',
    justifyContent: 'space-around',
  },
  timeslotto: {
    textAlign: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  bottombtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 25,
    width: '100%',
    marginBottom: 25,
  },
  socialmediastext: {
    color: '#808080',
  },
  timeslotavailable: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems:'center'
  },
  containerprofile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  profilecontainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginTop: 40,
  },
  inputboxlogin: {
    borderBottomWidth: 1,
  },
});
export default Timeslot;
