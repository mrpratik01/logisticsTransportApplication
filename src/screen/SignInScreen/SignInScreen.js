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
import React, { useState } from "react";
import logo from "../../../assets/images/logo.png";
import { useTailwind } from "tailwind-rn";
import CustomInput from "../../components/CustomInput/CustomInput";
import axios from "axios";

const SignInScreen = ({navigation}) => {

  const [credential , setCredential] = useState({email:'',password:''})
  const [checkValidEmail, setCheckValidEmail] = useState(false)
  const tailwind = useTailwind();
  const { height } = useWindowDimensions();
  // const [message, setMessage] = useState();
  // const [messageType, setMessageType] = useState();

  // const login = () => {
  //   if (email == "Pratik" && password == "Bhattarai"){
  //     Alert.alert(`Thanks ${email}`)
  //   }else {
  //     Alert.alert("the username or password is not correct ")
  //   }
  // };

  const handleLogin = async () =>{
    console.log(credential)
    const url = 'http://localhost:3001/api/login';
    
    try{
      const res = await axios.post(url, credential)
      navigation.navigate("HomeScreen")

      console.log(res.data)
    }catch(err){
      console.log(err)
    }
    

  }


  const handleRegister = () =>{

    navigation.navigate("RegisterScreen")

   
  }

  // const handleMessage = (message, type) => {
  //   setMessage()
  //   const message () => {

  //   }

  // }

  // const handleLogin = () => {
  //   const checkPassword = checkPasswordV
  // }



  // const handleCheckEmail = text => {
  //   let re = /\S+@\S+\.\S+/;
  //   let regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

  //   setEmail(text);
  //   if (re.test(text) || regex.test(text)){
  //     setCheckValidEmail(false);

  //   } else {
  //     setCheckValidEmail(true)
  //   }

  // }

  // const checkPasswordValidity = value => {
  //   const isNonWhiteSpace = /^\S*$/;
  //   if (!isNonWhiteSpace.test(value)) {
  //     return 'Password must not contain Whitespaces.';
  //   }

  //   const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  //   if (!isContainsUppercase.test(value)) {
  //     return 'Password must have at least one Uppercase Character.';
  //   }

  //   const isContainsLowercase = /^(?=.*[a-z]).*$/;
  //   if (!isContainsLowercase.test(value)) {
  //     return 'Password must have at least one Lowercase Character.';
  //   }

  //   const isContainsNumber = /^(?=.*[0-9]).*$/;
  //   if (!isContainsNumber.test(value)) {
  //     return 'Password must contain at least one Digit.';
  //   }

  //   const isValidLength = /^.{8,16}$/;
  //   if (!isValidLength.test(value)) {
  //     return 'Password must be 8-16 Characters Long.';
  //   }

  //   const isContainsSymbol =
  //     /^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/;
  //   if (!isContainsSymbol.test(value)) {
  //     return 'Password must contain at least one Special Symbol.';
  //   }

  //   return null;
  // };


  // const handleLogin = () => {
  //   const checkPassword = checkPasswordValidity(password);
  //   if(!checkPassword) {
  //     user_login({
  //       email: email,
  //       password:password

  //     }).then((result) => { 
  //       if (result.status == 200) {
  //         AsyncStorage.setItem("AccessToken", )
  //       }

  //     })
  //   } else {
  //     alert(checkPassword)
  //   }

  // }



  

  return (
    // <View style={styles.root}>
    //     <Image source={logo} style={[styles.logo, {height: height * 0.4}] } resizeMode="contain" ></Image>
    //     <Text style={tailwind('font-bold text-xl')}>Enter your phone number</Text>
    //     <CustomInput></CustomInput>
    // </View>

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

// const styles = StyleSheet.create({
//   root: {
//       alignItems: 'center',
//       padding: 20,
//   },

// })

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
