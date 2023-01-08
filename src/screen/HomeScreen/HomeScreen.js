import { View, Text, StyleSheet, Image, useWindowDimensions, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn';
import logo from '../../../assets/images/logo.png'

const HomeScreen = () => {


    const tailwind = useTailwind();
    const {height} = useWindowDimensions()
  return (
    <View styles={styles.root}>

      <Text>Hello</Text>



      
      </View>
  )
}


const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
    },
    
  
    
  
  })

export default HomeScreen