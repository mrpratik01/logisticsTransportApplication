import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  useState,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";

const AddNewLocationScreen = () => {
  const backPressed = () => {
    alert("Okay");
  };
  const continueButton = () => {
    alert("Okay");
  };
  
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [checked, setChecked] = React.useState(false);

  const saveBox = () => {
    setChecked(true)
  };
  return (
    <View>
      <TouchableOpacity style={styles.backArrow} onPress={backPressed}>
        <Ionicons name="arrow-back-sharp" size={40} color="black" />
      </TouchableOpacity>
      <View style={{ flex: 0, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.title}>Add a new address information</Text>
      </View>

      <View>
        <Text style={styles.title2}>Enter your Name</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Your Name"
        keyboardType="characters"
      />
      <View>
        <Text style={styles.address}>Full Address</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setAddress}
        value={address}
        placeholder="Address"
        keyboardType="characters"
      />
      <View>
        <Text style={styles.address}>Phone Number</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setNumber}
        value={number}
        placeholder="Phone Number"
        keyboardType="numeric"
      />

      <View style={styles.save}>
      <CheckBox
      
        title="save"
        left
        checked={checked}
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        onPress={saveBox}
      />
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.continueButton} onPress={continueButton}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
      </View>
      

      
    </View>
  );
};

const styles = StyleSheet.create({
  backArrow: {
    marginTop: 60,
    marginLeft: 30,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  title2: {
    marginLeft: 30,
    marginTop: 50,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontWeight: "500",
    fontSize: 18,
  },
  address: {
    marginLeft: 30,
    marginTop: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontWeight: "500",
    fontSize: 18,
  },
  input: {
    width: "60%",
    height: 40,
    marginTop: 20,
    marginLeft: 30,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  save: {
    marginTop: 30,
    marginLeft: 15,

  },
  button: {
    marginTop: -52,
    marginLeft: 300,
    backgroundColor: "#3B71F3",
    borderRadius: 5,
    width: "25%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  continueButton: {
    backgroundColor: "#3B71F3",
    borderRadius: 5,
    width: "40%",
    height: 40,
    justifyContent: 'center',
    alignItems: "center",
    marginVertical: 10,
  },

  buttonContainer: {
    marginTop: 50,
    alignItems: "center",
  },
});

export default AddNewLocationScreen;
