import { SafeAreaView,View, StyleSheet, Image, Text, useWindowDimensions } from 'react-native'
import React from 'react'
import logo from '../../../assets/images/logo.png'
import {useTailwind} from 'tailwind-rn';
import CustomInput from '../../components/CustomInput/CustomInput';


const SignInScreen = () => {
  const tailwind = useTailwind();
  const {height} = useWindowDimensions()
  return (

    <View style={styles.root}>
        <Image source={logo} style={[styles.logo, {height: height * 0.4}] } resizeMode="contain" ></Image>
        <Text style={tailwind('font-bold text-xl')}>Enter your phone number</Text>
        <CustomInput></CustomInput>
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
      alignItems: 'center',
      padding: 20,
  },
  logo: {
    width: '100%',
    maxWidth: 800,
    maxHeight: 500,
  },

  

})

export default SignInScreen