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
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const DeliveryItemsDetails = () => {
  const backPressed = () => {
    alert("Okay");
  };

  const continueButton = () => {
    alert("Okay");
  };

  const [selectedValue, setSelectedValue] = React.useState("item1");
  const [location, onChangeLocation] = React.useState("");
  const [category, setCategory] = React.useState("");

  return (
    <View>
      <TouchableOpacity style={styles.backArrow} onPress={backPressed}>
        <Ionicons name="arrow-back-sharp" size={40} color="black" />
      </TouchableOpacity>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          What items are we delivering
        </Text>
      </View>

      <View>
        <Text style={styles.title2}>Full Description</Text>
      </View>

      <TextInput
        style={styles.input}
        onChangeText={onChangeLocation}
        value={location}
        placeholder="Full Description"
        keyboardType="numeric"
      />

      <View>
        <Text style={styles.category}>Category</Text>
      </View>
      <TextInput
        style={styles.input}
        onChangeText={setCategory}
        value={category}
        placeholder="Category"
        keyboardType="characters"
      />

     

      <View
        style={{
          flex: 0,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View style={{}}>
          <Text style={styles.NumberOfItems}>Number Of Items</Text>
          <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }
          >
            <Picker.Item label="1" value="item1" />
            <Picker.Item label="2" value="item2" />
            <Picker.Item label="3" value="item3" />
            <Picker.Item label="4" value="item4" />
            <Picker.Item label="5" value="item5" />
            <Picker.Item label="6" value="item6" />
            <Picker.Item label="7" value="item7" />
            <Picker.Item label="8" value="item8" />
            <Picker.Item label="9" value="item9" />
            <Picker.Item label="10" value="item10" />
          </Picker>
        </View>
        <View>
        <Text style={styles.weight}>Weight</Text>
          <TextInput
            style={styles.weightInput}
            onChangeText={onChangeLocation}
            value={location}
            placeholder="Wight (KG)"
            keyboardType="numeric"
          />
        </View>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          Select Suitable vehicle to deliver your Items
        </Text>
      </View>

      <View style={{
          flex: 0,
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}> 
        <View>
        <MaterialIcons name="directions-bike" size={50} color="#3B71F3" />
        </View>
        <View>
        <FontAwesome5 name="truck-pickup" size={50} color="#3B71F3" />
        </View>
        <View>
        <FontAwesome5 name="truck-moving" size={50} color="#3B71F3" />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={continueButton}
        >
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
  title2: {
    marginLeft: 30,
    marginTop: 50,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontWeight: "500",
    fontSize: 18,
  },
  NumberOfItems: {
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "500",
    fontSize: 18,
  },
  weight: {
    marginTop: 30,
    marginLeft: 15,
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "500",
    fontSize: 18,
  },
  category: {
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
  weightInput: {
    width: "100%",
    height: 40,
    marginTop: 80,
    marginLeft: 0,
    margin: 12,
    borderWidth: 1.5,
    padding: 10,
  },
  continueButton: {
    backgroundColor: "#3B71F3",
    borderRadius: 5,
    width: "40%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },

  buttonContainer: {
    marginTop: 50,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default DeliveryItemsDetails;
