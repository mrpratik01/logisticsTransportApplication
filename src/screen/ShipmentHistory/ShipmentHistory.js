import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import axios from "axios";

const ShipmentHistory = ({ navigation }) => {
  const [credential, setCredential] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/packages/44")
      .then((res) => setCredential(res.data.result))
      .catch((err) => console.log(err));
  }, []);

  console.log(credential);

  const backPressed = () => {
    navigation.navigate("HomeScreen");
  };
  return (
    <View>
      <TouchableOpacity style={styles.backArrow} onPress={backPressed}>
        <Ionicons name="arrow-back-sharp" size={40} color="" />
      </TouchableOpacity>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "" }}>
          Shipment History
        </Text>
      </View>

      {credential.map((data) => {
        return(
          <View style={styles.shipmentText}>
          <View>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
             {data.pickup_address} to {data.dropoff_address}
            </Text>

            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              {data.package_category}
            </Text>

            <Text style={{ fontSize: 18, fontWeight: "500" }}>
              Weight: {data.weight}
            </Text>
          </View>

          <View style={styles.amount}>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>NPR 6000</Text>
          </View>
        </View>
        )
      }) 
       
      }
    

      <View
        style={{
          flex: 0.2,
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <View>
          <TouchableOpacity style={styles.buttomNav} onPress={backPressed}>
            <Entypo name="home" size={50} color="#3B71F3" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttomNav} onPress={backPressed}>
            <Entypo name="wallet" size={50} color="#3B71F3" />
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttomNav} onPress={backPressed}>
            <MaterialCommunityIcons name="account" size={50} color="#3B71F3" />
          </TouchableOpacity>
        </View>-
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

export default ShipmentHistory;
