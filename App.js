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
import ShipPackages from './src/screen/ShipPackages';

export default function App() {
  return (

    <TailwindProvider utilities={utilities}>

<HomeScreen></HomeScreen>


   </TailwindProvider>
  

  );
}

const styles = StyleSheet.create({
  
});
