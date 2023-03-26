import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from '@expo/vector-icons'; 


const PaymentSuccessful = () => {
  const backPressed = () => {
    alert("Okay");
  };

  const data = [
    { id: "a", value: "Payment Type:" },
    { id: "b", value: "Cash" },
    { id: "c", value: "Mobile:" },
    { id: "d", value: "9815186155" },
    { id: "e", value: "Amount Paid: " },
    { id: "f", value: "1650" },
    { id: "g", value: "Transaction ID" },
    { id: "h", value: "760200" },
  ];
  const continueButton = () => {
    alert("Okay");
  };
  return (
    <View>
      <TouchableOpacity style={styles.backArrow} onPress={backPressed}>
        <Ionicons name="arrow-back-sharp" size={40} color="black" />
      </TouchableOpacity>



      <AntDesign style={styles.check} name="checkcircle" size={100} color="#3B71F3" />

      <View style={{ justifyContent: "center", alignItems: "center", marginTop: 20, }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>
          Payment Successful
        </Text>
      </View>

      <View style={{ marginLeft: 50, marginTop: 20, }}>
      <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <Text style={styles.item}>{item.value}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
      numColumns={2} /></View>

<View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={continueButton}
        >
          <Text style={styles.buttonText}>Close</Text>
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
  summaryTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  title2: {
    marginLeft: 30,
    marginTop: 50,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    fontWeight: "500",
    fontSize: 18,
  },

  check:{
    marginTop: 150,
    marginLeft: 165,

 
  },
  itemContainer: {
    marginTop: 20,
    width: "60%",
    height: "80%",
  },
  item: {
    flex: 1,
    margin: 3,
    backgroundColor: "white",
    fontSize: 18,
    alignContent: "center",
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

export default PaymentSuccessful;
