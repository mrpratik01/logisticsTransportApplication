import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { MaterialCommunityIcons } from "@expo/vector-icons";

const WalletBalance = ({navigation}) => {
  const backPressed = () => {
    navigation.navigate("HomeScreen")
  };
  const Edit = () => {
    alert("okay");
  };
  const homePressed = () => {
    navigation.navigate("HomeScreen")
  };
  const walletPressed = () => {
    navigation.navigate("walletBalance")
  };
  const profilePressed = () => {
    navigation.navigate("profileSection")
  };
  return (
    <View>
      <TouchableOpacity style={styles.backArrow} onPress={backPressed}>
        <Ionicons name="arrow-back-sharp" size={40} color="black" />
      </TouchableOpacity>

      <View>
        <TouchableOpacity style={styles.buttomNavWallet} onPress={backPressed}>
            <Entypo name="wallet" size={50} color="#3B71F3" />
          </TouchableOpacity>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Wallet </Text>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "600", marginTop: 10 }}>
          NPR 2000{" "}
        </Text>
      </View>

      <View  style={{
          flex: 0.2,
          flexDirection: "row",
          justifyContent: "space-around",
        }}>
        <View>
          <TouchableOpacity style={styles.button} onPress={Edit}>
            <Text style={styles.buttonText}>Add Money</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={Edit}>
            <Text style={styles.buttonText}>Withdraw</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.balance}>Transaction History</Text>

      <View style={styles.shipmentText}>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Top Up from Khalti
          </Text>

        </View>

        <View style={styles.amount}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>NPR 6000</Text>
        </View>
      </View>
      <View style={styles.shipmentText}>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600" }}>
            Package Payment
          </Text>

        </View>

        <View style={styles.amount}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>NPR 2000</Text>
        </View>
      </View>

      <View
        style={{
          flex: 0.2,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View>
          <TouchableOpacity style={styles.buttomNav} onPress={homePressed}>
            <Entypo name="home" size={50} color="#3B71F3" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttomNav} onPress={walletPressed}>
            <Entypo name="wallet" size={50} color="#3B71F3" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttomNav} onPress={profilePressed}>
            <MaterialCommunityIcons name="account" size={50} color="#3B71F3" />
          </TouchableOpacity>
        </View>
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

  balance: {
    marginTop: 150,
    marginLeft: 20,
    fontWeight: "bold",
    fontSize: 24,
  },

  shipmentText: {
    padding: 20,
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },

  button: {
    marginTop: 30,
    backgroundColor: "#3B71F3",
    padding: 10,
    borderRadius: 5,
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
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

  buttomNavWallet: {
   
    alignItems: "center",
    justifyContent: "center",
    padding: 5,

    // marginLeft: 250,
    // padding: 20,
    // marginTop: 0,
    // backgroundColor: "white",
    // borderRadius: 5,
    // width: "100%",
    // height: 40,
    // alignItems: "center",
    // justifyContent: "center",
    // marginVertical: 10,
  },
  buttomNav: {
    // marginLeft: 250,
    padding: 0,
    marginTop: 300,
    alignContent: "flex-end",
    justifyContent: "flex-end",
    backgroundColor: "white",
    borderRadius: 5,
    width: "100%",
    height: 40,
    marginVertical: 10,
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
    justifyContent: "space-between"
  },
});

export default WalletBalance;
