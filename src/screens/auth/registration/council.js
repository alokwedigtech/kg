

import React,{useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert
} from 'react-native';
import Registrationindicator from '../../../components/Registrationindicator';
import Touchablebutton from '../../../components/touchablebutton';
import * as ImagePicker from 'react-native-image-picker';
const Council = ({navigation}) => {
  const [imageSource, setImageSource] = useState(null);
  const [imagefilename, setImagefilename] = useState(null);
  function selectImage() {
    let options = {
      title: 'You can choose one image',
      maxWidth: 256,
      maxHeight: 256,
      noData: true,
      mediaType: 'vidio',
      storageOptions: {
        skipBackup: true
      }
    };
    
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Alert.alert('You did not select any image');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } 
      else if (response.base64) {
        console.log('response.base64: ',response.base64);
      }else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        let source = { uri: response.uri };
        console.log(source.uri)
        // ADD THIS
        setImageSource(source.uri);
        setImagefilename(source.uri)
      }
    });
  }
  return (
    <View style={styles.container}>
      <Registrationindicator />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerprofile}>
          <View style={styles.profilecontainer}>
            <Text style={styles.personaldetailstext}>Bar Council ID</Text>
            <Text style={styles.socialmediastext}>
              This will increase the KG rating
            </Text>
            <View>
              <TouchableOpacity style={styles.uploadbtn}  onPress={selectImage}>
                <Text style={styles.uploadtext}>Upload Image</Text>
              </TouchableOpacity>
            </View>
            
          </View>
          {imageSource ===null  ? null :
          <View style={styles.selectimagcontainer}>
            {/* <Text>{imagefilename}</Text> */}
              <Image source={{ uri: imageSource }}style={styles.selectimage}/>
            </View>}
          <View style={styles.bottombtn}>
            <Touchablebutton
              content={'Back'}
              onPress={() => navigation.goBack()}
            />
            <Touchablebutton
              content={'Next'}
              type={'next'}
              onPress={() => navigation.navigate('Selfassestement')}
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
  bottombtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    width: '100%',
    marginBottom: 25,
  },
  selectimage:{
    height: 100,
    width : 100,
    resizeMode:'cover'

  },
  uploadbtn: {
    padding: 13,
    backgroundColor: '#2f2f2f',
    borderRadius: 20,
    marginTop: 40,
  },
  uploadtext: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  socialmediastext: {
    color: '#808080',
  },
  selectimagcontainer:{
    marginTop : 40
  },
  containerprofile: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  personaldetailstext: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputlabel: {
    color: '#c1c1c1',
    fontSize: 15,
  },
  profilecontainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});
export default Council;







// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity, Alert, Image } from 'react-native';
// import { STYLES, COLORS } from './style';
// // import ImagePicker from 'react-native-image-picker';
// import * as ImagePicker from 'react-native-image-picker';

// export default function Council() {
//   const [imageSource, setImageSource] = useState(null);

//   function selectImage() {
//     let options = {
//       title: 'You can choose one image',
//       maxWidth: 256,
//       maxHeight: 256,
//       noData: true,
//       mediaType: 'vidio',
//       storageOptions: {
//         skipBackup: true
//       }
//     };

//     ImagePicker.launchImageLibrary(options, response => {
//       if (response.didCancel) {
//         console.log('User cancelled photo picker');
//         Alert.alert('You did not select any image');
//       } else if (response.error) {
//         console.log('ImagePicker Error: ', response.error);
//       } else if (response.customButton) {
//         console.log('User tapped custom button: ', response.customButton);
//       } else {
//         let source = { uri: response.uri };

//         // ADD THIS
//         setImageSource(source.uri);
//       }
//     });
//   }

//   return (
//     <View
//       style={[
//         STYLES.flex,
//         STYLES.centerContainer,
//         { backgroundColor: COLORS.primaryDark }
//       ]}
//     >
//       <Text style={[STYLES.title, { color: COLORS.primaryLight }]}>
//         Simple Image Picker
//       </Text>
//       {/* ADD THIS */}
//       <View style={STYLES.imageContainer}>
//         {imageSource === null ? (
//           <Image
//             source={require('../../../assests/images/placeholderimage.jpg')}
//             style={STYLES.imageBox}
//             resizeMode='contain'
//           />
//         ) : (
//           <Image
//             source={{ uri: imageSource }}
//             style={STYLES.imageBox}
//             resizeMode='contain'
//           />
//         )}
//       </View>
//       <TouchableOpacity
//         onPress={selectImage}
//         style={[
//           STYLES.selectButtonContainer,
//           { backgroundColor: COLORS.primaryLight }
//         ]}
//       >
//         <Text style={STYLES.selectButtonTitle}>Pick an image</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }







