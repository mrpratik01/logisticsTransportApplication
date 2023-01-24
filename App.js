import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import SignInScreen from "./src/screen/SignInScreen";
import { TailwindProvider } from "tailwind-rn";
import utilities from "./tailwind.json";
import WelcomeScreen from "./src/screen/WelcomeScreen";
import OtpScreen from "./src/screen/OtpScreen/OtpScreen";
import HomeScreen from "./src/screen/HomeScreen";
import ChangePassword from "./src/screen/changePassword/ChangePassword";
import RegisterScreen from "./src/screen/RegisterScreen";
import PickupLocation from "./src/screen/PickupLocation";
import AddNewLocationScreen from "./src/screen/AddNewLocationScreen";
import DropOffLocation from "./src/screen/DropOffLocation/DropOffLocation";
import DeliveryItemsDetails from "./src/screen/DeliveryItemsDetails";
import MakePayment from "./src/screen/MakePayment";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const stack = createNativeStackNavigator();
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <stack.Navigator initialRouteName="WelcomeScreen">
          <stack.Screen name="WelcomeScreen" component={WelcomeScreen}  />
          <stack.Screen name="SignInScreen" component={SignInScreen}  />
          <stack.Screen name="HomeScreen" component={HomeScreen}></stack.Screen>
        </stack.Navigator>
      </NavigationContainer>

      <NavigationContainer>
        
      </NavigationContainer>




    </TailwindProvider>
  );
}

const styles = StyleSheet.create({});
