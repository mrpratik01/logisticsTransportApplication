import React, { useState } from 'react';
import { View, Text,  TouchableOpacity, useWindowDimensions, StyleSheet } from 'react-native';
import { TextInput } from "@react-native-material/core";
import {useTailwind} from 'tailwind-rn';

const PasswordChangeScreen = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);

  const handleChangePress = () => {
    // Validate input
    if (!oldPassword || !newPassword || !confirmPassword) {
      setError('Please fill out all fields');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('New passwords do not match');
      return;
    }

    // Change password
    // changePassword(oldPassword, newPassword)
    //   .then(() => {
    //     // Show success message
    //     setError(null);
    //     alert('Password changed successfully');
    //   })
    //   .catch(error => {
    //     // Show error message
    //     setError(error.message);
    //   });
    alert("Password change successfully")


  };

  const tailwind = useTailwind();
  const {height} = useWindowDimensions()


  return (
    <View style={styles.container}>
      <Text style={ [tailwind('font-bold '),styles.title]}>Reset Password</Text>
      <TextInput
        style={styles.input}
        value={oldPassword}
        onChangeText={text => setOldPassword(text)}
        placeholder="Old password"
        placeholderTextColor="#999"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        value={newPassword}
        onChangeText={text => setNewPassword(text)}
        placeholder="New password"
        placeholderTextColor="#999"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
        placeholder="Confirm new password"
        placeholderTextColor="#999"
        secureTextEntry
      />
      {error && <Text style={styles.error}>{error}</Text>}
      <TouchableOpacity style={styles.button} onPress={handleChangePress}>
        <Text style={ [tailwind('font-bold '), styles.buttonText]}>Change password</Text>
  
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'left',
    alignItems: 'left',
    backgroundColor: '#F5FCFF',
    paddingLeft: 20,
  },
  title: {
    fontSize: 24,
  paddingTop: 100,
  paddingLeft: 20,

},
  input: {
    height: 40,
    width: 300,
    borderColor: 'gray',
    // borderWidth: 1,
    margin: 10,
    padding: 10,

  },
  error: {
    color: 'red',
    marginTop: 20,
    paddingLeft: 80,
  },
  button: {
    backgroundColor: '#3B71F3',
     width: '50%',
     marginLeft: 15,
    
        marginTop: 50,
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
  },
  buttonText: {
    color: 'white',

  },
 
})

export default PasswordChangeScreen ;