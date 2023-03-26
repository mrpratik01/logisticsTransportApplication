import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, useWindowDimensions, Text, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import {useTailwind} from 'tailwind-rn';
import logo from '../../../assets/images/logo.png'
const RegisterScreen = ({navigation}) => {

  const [registerData , setRegisterData] = useState({name:'', email:'', number: '', password: ''})
  // const [registerData, setRegisterData] = useState()
  const tailwind = useTailwind();
  const {height} = useWindowDimensions()


  const handleRegister = async () => {
    try{
     const res = await axios.post("http://localhost:3001/api/signup", registerData)

     console.log(res.data)

     navigation.navigate("HomeScreen")


    }
    catch (err) {
      console.log(err)

    }


  }

  const handleChange = (e) => {
    setRegisterData((pre) => ({
      ...pre,[e.target.name] : e.target.value
    }
    ))

  }


  return (
    <View style={styles.container}>
        <Image source={logo} style={[styles.logo, {height: height * 0.4}] } resizeMode="contain" ></Image>
        <Text style={[tailwind('font-bold text-xl'), styles.title]}>Create Account</Text>
      <TextInput
        style={styles.inputField}
        type={"text"}
        placeholder="Name"
        value={registerData.name}
        onChangeText={text => setRegisterData({...registerData,name:text})}
      />
      <TextInput
        style={styles.inputField}
        type={"email"}
        placeholder="Email"
        value={registerData.email}
        onChangeText={text => setRegisterData({...registerData,email:text})}
      />
      <TextInput
        style={styles.inputField}
        type={"number"}
        placeholder="Phone Number"
        value={registerData.number}
        onChangeText={text => setRegisterData({...registerData,number:text})}
      />
      <TextInput
        style={styles.inputField}
        type={"password"}
        placeholder="Password"
        value={registerData.password}
        onChangeText={text => setRegisterData({...registerData,password:text})}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={() => console.log('Sign in clicked')}>
        <Text style={ [tailwind('font-bold '),styles.button2]}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },

  title: {
   padding: 10,
  },

  logo: {
    marginTop: -100,

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
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default RegisterScreen;