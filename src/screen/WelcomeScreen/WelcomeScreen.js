import { SafeAreaView,View, Image, Text, StyleSheet } from 'react-native'
import React from 'react'
import Logo from '../../../assets/images/logo.png'
import {useTailwind} from 'tailwind-rn';
import { Buttons } from '../../components/Buttons'

const WelcomeScreen = () => {

    const tailwind = useTailwind();

    const onSkipPress = () => {
        console.warn("Skip")
    }



  return (
    <View style = {styles.root}>
      <Image source={Logo} style={tailwind('')} resizeMode="contain" ></Image>
      <Text style={tailwind('font-bold text-center text-xl mx-4 ')} >Best Logistics service available for Nepal 🇳🇵</Text>
      <Buttons style={tailwind('')} onPress={onSkipPress} text="Skip"></Buttons>

    </View>
  )
}


const styles = StyleSheet.create({
    root: {
        alignItems: 'center'
    },

    

})



export default WelcomeScreen;

