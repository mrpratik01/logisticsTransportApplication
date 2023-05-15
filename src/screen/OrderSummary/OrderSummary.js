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
import React, {useEffect, useState} from "react";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";

const OrderSummary = ({navigation}) => {

  const [credential, setCredential] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/orderSummary/46")
      .then((res) => setCredential(res.data.result[0]))
      .catch((err) => console.log(err));
  }, []);


  const backPressed = () => {
    navigation.navigate("DeliveryItemsDetails")
  };
  const continueButton = () => {
    navigation.navigate("PaymentSuccessful")
  };
  const data = [
    { id: "a", value: "Package Description:" },
    { id: "b", value: credential.packagedescription },
    { id: "c", value: "Pickup Address:" },
    { id: "d", value: credential.pickup_address },
    { id: "e", value: "Drop-off Address: " },
    { id: "f", value: credential.dropoff_address },
  ];
  const data2 = [
    { id: "a", value: "Delivery Charge:" },
    { id: "b", value: `NPR ${credential.amount}` },
    { id: "c", value: "Service Charge:" },
    { id: "d", value: "150" },
    { id: "e", value: "Total Amount: " },
    { id: "f", value: TotalAMT },
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
