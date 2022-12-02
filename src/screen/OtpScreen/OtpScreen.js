import { View, Text, StyleSheet, TouchableOpacity, useWindowDimensions, ViewPropTypes, TextPropTypes, Input, TextInput } from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn';
import Buttons from '../../components/Buttons/Buttons';

 
const OtpScreen = () => {

    const onEnterPressed = () => {
        console.warn("skip")
    }
    
  const tailwind = useTailwind();
  const {height} = useWindowDimensions()

  
  return (
    <View style={styles.root}>
      <Text style={ [tailwind('font-bold '),styles.title]}>Enter 4 Digit Code</Text>
      <Text style={ styles.secondTitle} >Enter 4 digit code that you recieved in your Mobile Number +977-000000. </Text>

      <View style={styles.otpContainer}>
        <View style={styles.optBox}>
            <TextInput style={styles.optText} keyboardType='number-pad' showSoftInputOnFocus={true} maxLength={[1]}></TextInput>
        </View>
        <View style={styles.optBox}>
            <TextInput style={styles.optText} keyboardType='number-pad'></TextInput>
        </View>
        <View style={styles.optBox}>
            <TextInput style={styles.optText} keyboardType='number-pad'> </TextInput>
        </View>
        <View style={styles.optBox}>
            <TextInput style={styles.optText} keyboardType='number-pad'></TextInput>
        </View>

     
        
        
        </View>
        <TouchableOpacity  style={styles.button2} onPress={() => getPhoneNumber()}>
        <Text style={styles.buttonText2}>Resend</Text>
      </TouchableOpacity >
        <TouchableOpacity  style={styles.button} onPress={() => getPhoneNumber()}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity >
        
       
    </View>

  )
}


const styles = StyleSheet.create({
    root: {
        // alignItems: '',
        // paddingLeft: 20,
    },
    title: {
        fontSize: 24,
      paddingTop: 100,
      paddingLeft: 20,

    },

    secondTitle: {
        fontSize: 16,
        paddingLeft: 20,
        paddingTop: 20,
        width: '80%',
    },

    otpContainer: {
        paddingTop: 50,
        marginHorizontal: 20,
        marginBottom: 20,
       justifyContent: 'space-evenly',
       alignItems: 'center',
       flexDirection: 'row', 
    },
  
    optBox: {
        padding: 0,
        borderRadius: 5,
        borderColor: '#3B71F3',
        borderWidth: 3,
    },

    optText: {
        fontSize: 24,
        color: '#3B71F3',
        padding: 0,
        textAlign: 'center',
        paddingHorizontal: 18,
        paddingVertical: 10,

    },

    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        marginLeft: 35,
        width: '80%',
        paddingLeft: 0,
        padding: 8,
        backgroundColor: '#3B71F3',
        borderRadius: 10,
      },

      
    button2: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginLeft: 35,
        width: '80%',
        paddingLeft: 0,
        padding: 8,
       
        borderRadius: 10,
      },
     
      buttonText2:{
        fontSize: 20,
        textAlign: 'center',
        color: '#3B71F3',
      },

      buttonText:{
        fontSize: 20,
        textAlign: 'center',
        color: 'white',
      }
  
  })

export default OtpScreen