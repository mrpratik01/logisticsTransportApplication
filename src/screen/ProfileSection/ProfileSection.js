import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  useWindowDimensions,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Profile from "../../../assets/images/profileIcon.jpeg";
import { useTailwind } from "tailwind-rn";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const ProfileSection = () => {
  const backPressed = () => {
    alert("okay");
  };
  const Edit = () => {
    alert("okay");
  };
  const shipPackage = () => {
    alert("okay");
  };

  const tailwind = useTailwind();
  const { height } = useWindowDimensions();
  return (
    <View>
      <TouchableOpacity style={styles.backArrow} onPress={backPressed}>
        <Ionicons name="arrow-back-sharp" size={40} color="black" />
      </TouchableOpacity>

      <View style={styles.profileImg}>
        <Image
          source={Profile}
          style={styles.mainProfile}
          resizeMode="contain"
        ></Image>

        <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 20 }}>
          Prakriti Rai
        </Text>
      </View>

      <View style={styles.profileText}>
        <View>
          <Entypo name="phone" size={30} color="#000000" />
        </View>
        <View>
          <Text style={{ fontSize: 18, fontWeight: "600", margin: 10 }}>
            +977-9825432
          </Text>
        </View>
      </View>
      <View style={styles.profileText}>
        <View>
          <Entypo name="mail" size={30} color="#000000" />
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              margin: 5,
              marginLeft: 10,
            }}
          >
            Prakriti@gmail.com
          </Text>
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
          <TouchableOpacity style={styles.button} onPress={Edit}>
            <Text style={styles.buttonText}>Wallet</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={Edit}>
            <Text style={styles.buttonText}>History</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.inviteSection}>
        <View>
          <Entypo name="wallet" size={30} color="#000000" />
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              margin: 5,
              marginLeft: 10,
            }}
          >
           Fund Wallet
          </Text>
        </View>
      </View>
      <View style={styles.inviteSection2}>
        <View>
        <MaterialIcons name="group" size={40} color="#000" />
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              margin: 5,
              marginLeft: 10,
            }}
          >
            Tell your friends
          </Text>
        </View>
      </View>
      <View style={styles.inviteSection3}>
        <View>
          <Entypo name="hand" size={30} color="#000000" />
        </View>
        <View>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              margin: 5,
              marginLeft: 10,
            }}
          >
            Partner With us 
          </Text>
        </View>
      </View>

      <View style={{flex:0.2, flexDirection: 'row', justifyContent: 'space-around'}}>
        <View>
          <TouchableOpacity style={styles.buttomNav} onPress={shipPackage}>
          <Entypo name="home" size={50} color="#3B71F3" />
            
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttomNav} onPress={shipPackage}>
          <Entypo name="wallet" size={50} color="#3B71F3" />
            
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.buttomNav} onPress={shipPackage}>
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
  backArrow: {
    marginTop: 60,
    marginLeft: 30,
  },

  profileImg: {
    alignItems: "center",
  },

  mainProfile: {
    height: 250,
    width: 250,
  },

  profileText: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
  },
  inviteSection: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 100,
  },
  inviteSection2: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
  },
  inviteSection3: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
    marginTop: 20,
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

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  buttomNav: {
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
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default ProfileSection;
