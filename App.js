import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screen/SignInScreen';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import WelcomeScreen from './src/screen/WelcomeScreen'
import OtpScreen from './src/screen/OtpScreen/OtpScreen';
import HomeScreen from './src/screen/HomeScreen';
import ChangePassword from './src/screen/changePassword/ChangePassword';
import RegisterScreen from './src/screen/RegisterScreen';
import PickupLocation from './src/screen/PickupLocation';
import AddNewLocationScreen from './src/screen/AddNewLocationScreen';
import DropOffLocation from './src/screen/DropOffLocation/DropOffLocation';
import DeliveryItemsDetails from './src/screen/DeliveryItemsDetails';
export default function App() {
  return (

    <TailwindProvider utilities={utilities}>

<DeliveryItemsDetails></DeliveryItemsDetails>
   </TailwindProvider>
  

  );
}

const styles = StyleSheet.create({
  
});
