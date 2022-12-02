import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native'
import React, {useState, useRef}  from 'react'
import PhoneInput from 'react-native-phone-number-input';


 


const CustomInput = () => {

  const [phoneNumber, setPhoneNumber] = useState('');

  const phoneInput = useRef(null);

  const getPhoneNumber = () => {
    Alert.alert(phoneNumber);
  };






  return (
    <View style={styleSheet.MainContainer}>
 
      
      <PhoneInput
        ref={phoneInput}
        defaultValue={phoneNumber}
        defaultCode="NP"
        layout="first"
        withShadow
        autoFocus
        containerStyle={styleSheet.phoneNumberView}
        textContainerStyle={{ paddingVertical: 0 }}
        onChangeFormattedText={text => {
          setPhoneNumber(text);
        }}
      />

<TouchableOpacity  style={styleSheet.button} onPress={() => getPhoneNumber()}>
        <Text style={styleSheet.buttonText}>Get OTP Code</Text>
      </TouchableOpacity >
 
      
    </View>
  )
}


const styleSheet = StyleSheet.create({
 
  MainContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  heading:{
    fontSize: 24,
    textAlign: 'center',
    paddingBottom: 20,
    color: 'black'
  },
 
  phoneNumberView: {
    width: '80%',
    height: 50,
    backgroundColor: 'white'
  },

  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
    width: '80%',
    padding: 8,
    backgroundColor: '#3B71F3',
    borderRadius: 10,
  },
 
  buttonText:{
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  }
 
 
});

export default CustomInput
