import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn';
import logo from '../../../assets/images/logo.png'

const HomeScreen = () => {
    const tailwind = useTailwind();
    const {height} = useWindowDimensions()
  return (
    <View>
      <Text style={styles.root}> 
      <Image source={logo} style={[styles.logo, {height: height * 0.4}] } resizeMode="contain" ></Image>
      
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
    root: {
       
    },
    logo: {
      width: '100%',
      maxWidth: 800,
      maxHeight: 500,
    },
  
    
  
  })

export default HomeScreen