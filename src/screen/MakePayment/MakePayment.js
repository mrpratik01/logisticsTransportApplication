import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { CheckBox } from "react-native-elements";

const MakePayment = ({navigation}) => {
  const backPressed = () => {
    alert("Okay");
  };

  const [cash, setCash] = React.useState(false);
  const [wallet, setWallet] = React.useState(false);

  const selectCash = () => {
    setCash(true);
    setWallet(false);
  };

  const selectWallet = () => {
    setCash(false);
    setWallet(true);
  };

  const continueButton = () => {
    navigation.navigate("paymentSuccessful")
  };

  return (
    <View>
      <TouchableOpacity style={styles.backArrow} onPress={backPressed}>
        <Ionicons name="arrow-back-sharp" size={40} color="black" />
      </TouchableOpacity>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>Payment</Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "300", marginTop: 30 }}>
          How would you like to pay for your delivery
        </Text>
      </View>

      <View style={styles.radioButton}>
        <CheckBox
          title="Cash"
          center
          checked={cash}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={selectCash}
        />
       
        <CheckBox

          title="Wallet"
          center
          checked={wallet}
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          onPress={selectWallet}
        />
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

  title: {
    marginTop: 20,
    marginLeft: 30,
    fontSize: 18,
    fontWeight: "bold",
  },

  radioButton: {
    marginTop: 30,
    padding: 10,
    marginLeft: 30,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',

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
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },

  buttonContainer: {
    marginTop: 50,
    alignItems: "center",
  },
});

export default MakePayment;
