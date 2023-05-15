import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Alert,
} from "react-native";
import React, { useContext, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { AppContext } from "../../AppContext";
import axios from "axios";


const DeliveryItemsDetails = ({ navigation }) => {
  const route = useRoute();

  const { pickupAddress, dropAddress } = useContext(AppContext);

  const backPressed = () => {
    navigation.navigate("DropOffLocation");
  
  };

  const [credential, setCredential] = useState({
    packageDescription: "",
    pickup_Address: pickupAddress,
    dropoff_address: dropAddress,
    package_Category: "",
    totalKM: "",
    weight: "",
  });
  const [selectedValue, setSelectedValue] = React.useState("item1");
  const [location, onChangeLocation] = React.useState("");
  const [category, setCategory] = React.useState("");


  const continueButton = async () => {
      console.log(credential)
      navigation.navigate("orderSummary");
  };


  const handleChange = (e) => {
    setRegisterData((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
    }));
  };

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
        placeholder="Full Description"
        value={credential.description}
        onChangeText={(text) =>
          setCredential({ ...credential, description: text })
        }
      />

      <View>
        <Text style={styles.category}>Category</Text>
      </View>
      <TextInput
        style={styles.input}
        value={credential.category}
        onChangeText={(text) =>
          setCredential({ ...credential, category: text })
        }
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
        <View>
          <Text style={styles.weight}>Total KM</Text>
          <TextInput
            style={styles.weightInput}
            placeholder="KM"
            keyboardType="numeric"
            value={credential.totalKM}
            onChangeText={(text) =>
              setCredential({ ...credential, totalKM: text })
            }
          />
        </View>
        <View>
          <Text style={styles.weight}>Weight</Text>
          <TextInput
            style={styles.weightInput}
            placeholder="Wight (KG)"
            keyboardType="numeric"
            value={credential.weight}
            onChangeText={(text) =>
              setCredential({ ...credential, weight: text })
            }
          />
        </View>
      </View>
{/* 
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          Select Suitable Pricing for your delivery
        </Text>
      </View>

      <View
        style={{
          flex: 0,
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 20,
        }}
      >
        <View>
          <MaterialIcons name="directions-bike" size={50} color="#3B71F3" />
        </View>
        <View>
          <FontAwesome5 name="truck-pickup" size={50} color="#3B71F3" />
        </View>
        <View>
          <FontAwesome5 name="truck-moving" size={50} color="#3B71F3" />
        </View>
      </View> */}

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
    marginLeft: 10,
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
    marginTop: 40,
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
