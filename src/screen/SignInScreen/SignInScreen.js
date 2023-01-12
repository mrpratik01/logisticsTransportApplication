import { SafeAreaView,View, StyleSheet, Image, Text, useWindowDimensions, TextInput, TouchableOpacity, } from 'react-native'
import React , { useState } from 'react'
import logo from '../../../assets/images/logo.png'
import {useTailwind} from 'tailwind-rn';
import CustomInput from '../../components/CustomInput/CustomInput';



const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const tailwind = useTailwind();
  const {height} = useWindowDimensions()
  return (

    // <View style={styles.root}>
    //     <Image source={logo} style={[styles.logo, {height: height * 0.4}] } resizeMode="contain" ></Image>
    //     <Text style={tailwind('font-bold text-xl')}>Enter your phone number</Text>
    //     <CustomInput></CustomInput>
    // </View>

    <View style={styles.container}>
      <Image source={logo} style={[styles.logo, {height: height * 0.4}] } resizeMode="contain" ></Image>
      <TextInput
        style={styles.inputField}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={() => console.log('Sign in clicked')}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log('Sign in clicked')}>
        <Text style={ [tailwind('font-bold '),styles.button1]}>Forgot Password ?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => console.log('Sign in clicked')}>
        <Text style={ [tailwind('font-bold '),styles.button2]}>Don't have an account? create one</Text>
      </TouchableOpacity>

    </View>
  )
}

// const styles = StyleSheet.create({
//   root: {
//       alignItems: 'center',
//       padding: 20,
//   },


  

// })


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
    logo: {
    width: '100%',
    maxWidth: 800,
    maxHeight: 500,
  },
  inputField: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  button: {
    backgroundColor: '#3B71F3',
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button1: {
    backgroundColor: 'white',
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  button2: {
    backgroundColor: 'white',
    color: 'black',
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    paddingLeft: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SignInScreen