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

const OrderSummary = () => {
  const backPressed = () => {
    alert("Okay");
  };
  const continueButton = () => {
    alert("Okay");
  };
  const data = [
    { id: "a", value: "Total Quantity:" },
    { id: "b", value: "2" },
    { id: "c", value: "Weight of items:" },
    { id: "d", value: "50Kg" },
    { id: "e", value: "Vehicle Type: " },
    { id: "f", value: "Mini-Truck" },
  ];
  const data2 = [
    { id: "a", value: "Delivery Charge:" },
    { id: "b", value: "NPR 1500" },
    { id: "c", value: "Service Charge:" },
    { id: "d", value: "150" },
    { id: "e", value: "Total Amount: " },
    { id: "f", value: "1650" },
  ];

  const numColumns = 2;
  const size = Dimensions.get("window").width / numColumns;
  return (
    <View>
      <TouchableOpacity style={styles.backArrow} onPress={backPressed}>
        <Ionicons name="arrow-back-sharp" size={40} color="black" />
      </TouchableOpacity>
      <View style={{ flex: 0, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.title}>Order Summary</Text>
      </View>
      <View style={{ marginLeft: 50, marginTop: 50, }}>
      <Text style={styles.summaryTitle}>Items Summary</Text>
      <FlatList
      data={data}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <Text style={styles.item}>{item.value}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
      numColumns={2} />
      </View>
      <View style={{ marginLeft: 50, marginTop: 50, }}>
      <Text style={styles.summaryTitle}>Payment Summary</Text>
      <FlatList
      data={data2}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <Text style={styles.item}>{item.value}</Text>
        </View>
      )}
      keyExtractor={item => item.id}
      numColumns={2} />
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

  itemContainer: {
    marginTop: 20,
    width: '50%',
    height: '80%',
    
  },
  item: {
    flex: 1,
    margin: 3,
    backgroundColor: 'white',
    fontSize: 18,
    alignContent: 'center'
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

export default OrderSummary;
