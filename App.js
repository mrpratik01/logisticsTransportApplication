import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignInScreen from './src/screen/SignInScreen';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';
import OtpScreen from './src/screen/OtpScreen/OtpScreen';
import HomeScreen from './src/screen/HomeScreen';

export default function App() {
  return (

    <TailwindProvider utilities={utilities}>
      {/* <WelcomeScreen></WelcomeScreen> */}

<HomeScreen></HomeScreen>

   </TailwindProvider>
  

  );
}

const styles = StyleSheet.create({
  
});
