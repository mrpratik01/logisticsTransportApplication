import { View, Text, StyleSheet, Image, useWindowDimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn';
import logo from '../../../assets/images/logo.png'



const HomeScreen = () => {
  const fundWallet = () => {
    alert("Okay")
  };


    const tailwind = useTailwind();
    const {height} = useWindowDimensions()
  return (
    <View style={styles.root}>
      
      <Text style= {styles.title1}>Hello,</Text>
      <Text style= {styles.title2}>Good Morning Ram</Text>
      <Text style= {styles.balance}>Balance</Text>
      <Text style= {styles.amount}>NPR 10,000</Text>
      <TouchableOpacity style={styles.button} onPress={fundWallet}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      









      
      </View>
  )
}


const styles = StyleSheet.create({

  root:{
  flex: 1,
    
  },
  title1: {
    marginTop: 100,
    marginLeft:50,
    fontWeight: '500',
    fontSize: 24,
    
  },


  title2: {
    marginTop: 10,
    marginLeft:50,
    fontWeight: 'bold',
    fontSize: 24,
    
  },

  balance: {
    marginTop: 50,
    marginLeft:50,
    fontWeight: 'bold',
    fontSize: 18,
  },

  amount: {
    marginTop: 20,
    marginLeft: 50,
    fontWeight: '500',
    fontSize: 18,
  },
  button: {
    marginTop: -50,
    marginLeft: 250,
    backgroundColor: '#3B71F3',
    borderRadius: 5,
    width: '30%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },





  
  })

export default HomeScreen