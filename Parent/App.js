import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {auth }from '../Parent/Firebase'
import SplashScreen from './src/Screen/SplashScreen';
import SignIn from './src/Screen/SignIn';
import SignUp from './src/Screen/SignUp';
import ForgetPassword from './src/Screen/ForgetPassword';
import TabScreen from './src/Screen/TabScreen';
import UserDetails from './src/Screen/UseDetails';
import EditScreen from './src/Screen/EditScreen';
import OTP from './src/OTP';

const Stack = createNativeStackNavigator();
export default function App({navigation}) {
  const [signedIn,setSignedIn]=useState(false)

//   auth.onAuthStateChanged((user)=>{
//     if(user){
//         setSignedIn(true);
//        console.log(user.uid,"user------------")
     
//     }else{
     
//         setSignedIn(false);
//     }
// });
  return (
    
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
      
      <Stack.Screen name="Splash" options = {{headerShown :false}} component={SplashScreen} />
      <Stack.Screen name="Phone" options = {{headerShown :false}} component={OTP} />
      <Stack.Screen name="SignIn" options = {{headerShown :false}} component={SignIn} />
    <Stack.Screen name="SignUp" options = {{headerShown :false}} component={SignUp} />
      <Stack.Screen name="ForgetPassword" options = {{headerShown :false}}  component={ForgetPassword} />
      <Stack.Screen name="HomeScreen" options = {{headerShown :false}} component={TabScreen} />
      <Stack.Screen name="UserDetails" options = {{headerShown :false}} component={UserDetails} />
      <Stack.Screen name="EditScreen" options = {{headerShown :false}} component={EditScreen} />
      </Stack.Navigator>
      {/* {!signedIn ?(
        <>
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen name="Splash" options = {{headerShown :false}} component={SplashScreen} />

      <Stack.Screen name="SignIn" options = {{headerShown :false}} component={SignIn} />
      <Stack.Screen name="SignUp" options = {{headerShown :false}} component={SignUp} />
      <Stack.Screen name="ForgetPassword" options = {{headerShown :false}}  component={ForgetPassword} />
      </Stack.Navigator>
      </>
      ):(
        <>
        <Stack.Navigator >
         
         <Stack.Screen name="HomeScreen" options = {{headerShown :false}} component={TabScreen} />
      
   
    </Stack.Navigator>
    </>
      )} */}
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  
});
