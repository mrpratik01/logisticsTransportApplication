import { View, Text, Pressable, StyleSheet } from 'react-native'
import React from 'react'
import {useTailwind} from 'tailwind-rn';

const Buttons = ({onPress, text}) => {
    
    
    const tailwind = useTailwind();


  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={tailwind('font-bold text-white text-lg')}>{text}</Text>
    </Pressable>
  )
}


const styles = StyleSheet.create({
    button: {

        backgroundColor: '#3B71F3',
        width: '50%',
        marginTop: 50,
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    }
})

export default Buttons