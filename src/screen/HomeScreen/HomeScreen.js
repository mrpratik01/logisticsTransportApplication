import {
  View,
  Text,
  StyleSheet,
  Image,
  useWindowDimensions,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, {useContext} from "react";
import { useTailwind } from "tailwind-rn";
import logo from "../../../assets/images/logo.png";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import shipmentHistory from "../ShipmentHistory";
import CalculateRate from "../CalculateRate";
import { AppContext } from "../../AppContext";

const HomeScreen = ({navigation}) => {

  const { updateUserDetails, users} = useContext(AppContext)
  const fundWallet = () => {

    navigation.navigate("walletBalance")
  };
  const shipPackage = () => {

    navigation.navigate("PickupLocation")
  };

  const shipmentHistory = () => {

    navigation.navigate("shipmentHistory")
  };
  const walletPressed = () => {

    navigation.navigate("walletBalance")
  };
  const profilePressed = () => {

    navigation.navigate("profileSection")
  };
  const calculateRate = () => {

    navigation.navigate("calculateRate")
  };
  const referFriend = () => {

    Alert.alert("Refer Link")
  };


  const tailwind = useTailwind();
  const { height } = useWindowDimensions();
  return (
    <View style={styles.root}>
      <Text style={styles.title1}>Hello,</Text>
      <Text style={styles.title2}>Good Morning {users.userName}</Text>
      <Text style={styles.balance}>Balance</Text>
      <Text style={styles.amount}>NPR 10,000</Text>
      <TouchableOpacity style={styles.button} onPress={fundWallet}>
        <Text style={styles.buttonText}>Fund Wallet</Text>
      </TouchableOpacity>

      <View style={{flex:0.2, flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
          <TouchableOpacity style={styles.shipPackage} onPress={shipPackage}>
            <Feather name="package" size={40} color="#3B71F3" />
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
                marginTop: 10,
              }}
            >
              Ship Packages
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.shipPackage} onPress={shipmentHistory}>
          <FontAwesome name="history" size={40} color="#3B71F3" />
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
                marginTop: 10,
              }}
            >
            Shipment History
            </Text>
          </TouchableOpacity>
        </View>

        {/* <View>
          <TouchableOpacity style={styles.shipPackage} onPress={shipPackage}>
            <Feather name="package" size={40} color="#3B71F3" />
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
                marginTop: 10,
              }}
            >
              Ship Packages
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
      <View style={{flex:0.2, flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
          <TouchableOpacity style={styles.shipPackage} onPress={calculateRate}>
          <MaterialIcons name="calculate" size={40} color="#3B71F3" />
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
                marginTop: 10,
              }}
            >
            Calculate Rate
            </Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.shipPackage} onPress={referFriend}>
          <FontAwesome5 name="user-friends" size={40} color="#3B71F3" />
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
                marginTop: 10,
              }}
            >
            Refer to Friend
            </Text>
          </TouchableOpacity>
        </View>

        {/* <View>
          <TouchableOpacity style={styles.shipPackage} onPress={shipPackage}>
            <Feather name="package" size={40} color="#3B71F3" />
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
                marginTop: 10,
              }}
            >
              Ship Packages
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>



{/* Butttom Navigation  */}



      <View style={{flex:0.2, flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
          <TouchableOpacity style={styles.buttomNav} onPress={shipPackage}>
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

        {/* <View>
          <TouchableOpacity style={styles.shipPackage} onPress={shipPackage}>
            <Feather name="package" size={40} color="#3B71F3" />
            <Text
              style={{
                color: "black",
                fontWeight: "bold",
                fontSize: 18,
                marginTop: 10,
              }}
            >
              Ship Packages
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  title1: {
    marginTop: 100,
    marginLeft: 50,
    fontWeight: "500",
    fontSize: 24,
  },

  title2: {
    marginTop: 10,
    marginLeft: 50,
    fontWeight: "bold",
    fontSize: 24,
  },

  balance: {
    marginTop: 50,
    marginLeft: 50,
    fontWeight: "bold",
    fontSize: 18,
  },

  amount: {
    marginTop: 20,
    marginLeft: 50,
    fontWeight: "500",
    fontSize: 18,
  },
  button: {
    marginTop: -50,
    marginLeft: 250,
    backgroundColor: "#3B71F3",
    borderRadius: 5,
    width: "30%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  shipPackage: {
    marginTop: 100,
    // marginLeft: 250,
    backgroundColor: "white",
    borderRadius: 5,
    width: "100%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10, 
  },
  buttomNav: {
    marginTop: 300,
    // marginLeft: 250,
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
});

export default HomeScreen;
