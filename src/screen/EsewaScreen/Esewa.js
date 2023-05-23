import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
function Esewa({navigation}) {
  const backPressed = () => {
    navigation.navigate("walletBalance");
  };

  const continueButton = () => {
    navigation.navigate("walletBalance")
  };

  const [credential, setCredential] = useState({
    amount: "",
    esewaId: "",
    remarks: "",

  });
  return (
    <View>
      <TouchableOpacity style={styles.backArrow} onPress={backPressed}>
        <Ionicons name="arrow-back-sharp" size={40} color="black" />
      </TouchableOpacity>

      <View style={{ flex: 0, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.title}>Load Balance from E-sewa</Text>
      </View>

      <View>
        <Text style={styles.title1}>Amount</Text>
      </View>
      <TextInput
        style={styles.input}
        value={credential.amount}
        onChangeText={(text) => setCredential({ ...credential, amount: text })}
        placeholder="Amount"
        keyboardType="characters"
      />
      <View>
        <Text style={styles.title2}>Esewa ID</Text>
      </View>
      <TextInput
        style={styles.input}
        value={credential.amount}
        onChangeText={(text) => setCredential({ ...credential, esewaId: text })}
        placeholder="Amount"
        keyboardType="characters"
      />
      <View>
        <Text style={styles.title2}>Remarks</Text>
      </View>
      <TextInput
        style={styles.input}
        value={credential.amount}
        onChangeText={(text) => setCredential({ ...credential, remarks: text })}
        placeholder="Amount"
        keyboardType="characters"
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
}

const styles = StyleSheet.create({
  backArrow: {
    marginTop: 60,
    marginLeft: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
  },

  title1: {
    marginTop: 50,
    marginLeft: 50,
    fontWeight: "500",
    fontSize: 18,
  },

  title2: {
    marginTop: 10,
    marginLeft: 50,
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
export default Esewa;
