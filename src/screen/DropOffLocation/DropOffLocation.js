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

const DropOffLocation = ({navigation}) => {
  const backPressed = () => {
   navigation.navigate("PickupLocation")
  };


  const Edit = () => {
    navigation.navigate("AddNewLocationScreen")
  };
  const continueButton = () => {
    navigation.navigate("DeliveryItemsDetails")
  };

  const [location, onChangeLocation] = React.useState("");
  const [addressFirst, setAddressFirst] = React.useState(false);
  const [addressSecond, setAddressSecond] = React.useState(false);
  const [addressThird, setAddressThird] = React.useState(false);

  const First = () => {
    setAddressFirst(true);
    setAddressSecond(false);
    setAddressThird(false);
  };
  const second = () => {
    setAddressFirst(false);
    setAddressSecond(true);
    setAddressThird(false);
  };
  const third = () => {
    setAddressFirst(false);
    setAddressSecond(false);
    setAddressThird(true);
  };

  return (
    <View>
      <TouchableOpacity style={styles.backArrow} onPress={backPressed}>
        <Ionicons name="arrow-back-sharp" size={40} color="black" />
      </TouchableOpacity>
      <Text style={styles.title}>
        Where will we be Dropping off your packages
      </Text>


      <TextInput
        style={styles.input}
        onChangeText={onChangeLocation}
        value={location}
        placeholder="Add New Location"
        keyboardType="numeric"
      />
      <TouchableOpacity style={styles.button} onPress={Edit}>
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <Text style={styles.title2}>Select from saved location</Text>

      <View style= {styles.radioButton}>
        <CheckBox
          title="Damak 1, Jhapa"
          center
          checked={addressFirst}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={First}
        />
        <CheckBox
          title="Lagankhel, Lalitpur"
          center
          checked={addressSecond}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={second}
        />
        <CheckBox
          title="Balaju, Kathmandu"
          center
          checked={addressThird}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={third}
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
        marginTop: 20,
        marginLeft: 30,
        fontSize: 18,
        fontWeight: "bold",
      },


      input: {
        width: "60%",
        height: 40,
        marginTop: 50,
        marginLeft: 30,
        margin: 12,
        borderWidth: 1,
        padding: 10,
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
    
      title2: {
        marginLeft: 30,
        marginTop: 50,
        justifyContent: 'flex-start',
        alignItems: "flex-start",
        fontWeight: "bold",
        fontSize: 18,
      },
    
      radioButton: {
        marginTop: 30,
        marginLeft: 10,
        justifyContent: 'flex-start',
        alignItems: "flex-start"
      },
      
})

export default DropOffLocation;
