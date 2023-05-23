import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const CalculateRate = ({ navigation }) => {
  const [credential, setCredential] = useState({
    pickupAddress: "",
    dropOffAddress: "",
    totalKM: "",
    weight: "",
  });

  const estimatedAMT = credential.totalKM * 120;

  const backPressed = () => {
    navigation.navigate("HomeScreen");
  };

  const continueButton = () => {
    Alert.alert(`Your total estimated cost is ${estimatedAMT}`);
    credential("");
  };
  return (
    <View>
      <TouchableOpacity style={styles.backArrow} onPress={backPressed}>
        <Ionicons name="arrow-back-sharp" size={40} color="" />
      </TouchableOpacity>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "" }}>
          Calculate Rate
        </Text>
      </View>
      <View>
        <Text style={styles.title2}>Enter Pickup Address</Text>
      </View>
      <TextInput
        style={styles.input}
        value={credential.pickupAddress}
        onChangeText={(text) =>
          setCredential({ ...credential, pickupAddress: text })
        }
        placeholder="pickup Address"
        keyboardType="characters"
      />
      <View>
        <Text style={styles.address}>Enter Drop Off Location</Text>
      </View>
      <TextInput
        style={styles.input}
        value={credential.dropOffAddress}
        onChangeText={(text) =>
          setCredential({ ...credential, dropOffAddress: text })
        }
        placeholder="Drop-Off Address"
        keyboardType="characters"
      />
      <View>
        <Text style={styles.address}>Total KM</Text>
      </View>
      <TextInput
        style={styles.input}
        value={credential.totalKM}
        onChangeText={(text) => setCredential({ ...credential, totalKM: text })}
        placeholder="Total KM "
        keyboardType="numeric"
      />
      <View>
        <Text style={styles.address}>weight</Text>
      </View>
      <TextInput
        style={styles.input}
        value={credential.weight}
        onChangeText={(text) => setCredential({ ...credential, weight: text })}
        placeholder="Weight"
        keyboardType="numeric"
      />

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

  shipmentText: {
    marginTop: 100,
    marginLeft: 30,
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

  buttomNav: {
    marginTop: 350,
    backgroundColor: "white",
    borderRadius: 5,
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },

  address: {
    marginLeft: 30,
    marginTop: 30,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontWeight: "500",
    fontSize: 18,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  shipmentText: {
    padding: 20,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CalculateRate;
