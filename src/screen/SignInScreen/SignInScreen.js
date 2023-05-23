import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
  Alert,
  AsyncStorage,
} from "react-native";
import React, { useContext, useState } from "react";
import logo from "../../../assets/images/logo.png";
import { useTailwind } from "tailwind-rn";
import CustomInput from "../../components/CustomInput/CustomInput";
import axios from "axios";
import { AppContext } from "../../AppContext";

const SignInScreen = ({navigation}) => {


  const { updateUserDetails, users} = useContext(AppContext)
  const [credential , setCredential] = useState({email:'',password:''})
  const [checkValidEmail, setCheckValidEmail] = useState(false)
  const tailwind = useTailwind();
  const { height } = useWindowDimensions();


  const handleLogin = async () =>{
    const url = 'http://localhost:3001/api/login';
    
    try{
      const res = await axios.post(url, credential)
      updateUserDetails(res.data)
      navigation.navigate("HomeScreen")
    }catch(err){
      console.log(err)
    }
    

  }
 
  const handleRegister = () =>{

    navigation.navigate("RegisterScreen")

   
  }

  return (


    <View style={styles.container}>
      <Image
        source={logo}
        style={[styles.logo, { height: height * 0.4 }]}
        resizeMode="contain"
      ></Image>
      <TextInput
        style={styles.inputField}
        placeholder="Email"
        value={credential.email}
        onChangeText={text => setCredential({...credential,email:text})}
      />
      {checkValidEmail ? (
        <Text style={styles.textFailed}>Wrong format email</Text>
      ) : (
        <Text style={styles.textFailed}> </Text>
      )}
      <TextInput
        style={styles.inputField}
        placeholder="Password"
        value={credential.password}
        onChangeText={text => setCredential({...credential,password:text})}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("Sign in clicked")}>
        <Text style={[tailwind("font-bold "), styles.button1]}>
          Forgot Password ?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={handleRegister}
      >
        <Text style={[tailwind("font-bold "), styles.button2]}>
          Don't have an account? create one
        </Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5FCFF",
  },
  logo: {
    width: "100%",
    maxWidth: 800,
    maxHeight: 500,
  },
  inputField: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  button: {
    backgroundColor: "#3B71F3",
    width: "80%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  button1: {
    backgroundColor: "white",
    width: "80%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
  },
  button2: {
    backgroundColor: "white",
    color: "black",
    width: "80%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 10,
    paddingLeft: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  textFailed: {
    alignSelf: 'flex-end',
    color: 'red',
  },
});

export default SignInScreen;
