import React,{useState,useEffect} from 'react'
import { StyleSheet,View,Text, FlatList,TouchableOpacity ,SafeAreaView,Modal,
    LayoutAnimation, 
    ScrollView,Alert} from 'react-native';
import { Header,Button } from 'react-native-elements';
import Reviewform from './reviewform';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {db} from './firebase'
import {auth} from './firebase'
import Contact from './Contact'
import { StatusBar } from 'expo-status-bar';
import RegisterScreen from './RegisterScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons';
import ShopmindersTap from './ShopmindersTap';
import SettingsTab from './SettingsTab';
import forgetPass from './forgetPass';
export default function Home(){
    const Tab = createBottomTabNavigator();
  const Stack = createStackNavigator()
   const [signedIn,setSignedIn]=useState(false);
    // const [user,setUser]=useState();
  
    auth.onAuthStateChanged((user)=>{
        if(user){
            setSignedIn(true);
           
        }else{
         
            setSignedIn(false);
        }
    });
    const forFade = ({ current }) => ({
        cardStyle: {
          opacity: current.progress,
          backgroundColor: 'transparent',
        },
      });

    return(
            
        <NavigationContainer theme={DefaultTheme}>
             {signedIn ?(
       <SafeAreaView style={{flex: 1, backgroundColor: '#29434e'}}>
       <Tab.Navigator
         screenOptions={({ route }) => ({
         tabBarIcon: ({ color, size }) => {
           if (route.name === 'shopminders') {
             return (
               <FontAwesome 
                 name='list-ul'
                 size={size}
                 color={color}
               />
             
             )
           } 
           if (route.name === 'settings') {
             return (
               <FontAwesome 
                 name="cogs"
                 size={size}
                 color={color}
               />
             )
           }
         },
       })}
       tabBarOptions={{
         activeTintColor: 'white',
         inactiveTintColor: '#819ca9',
         style: {
           backgroundColor: '#29434e'
         }
       }}
       >
         <Tab.Screen 
           name="shopminders"

    component={ShopmindersTap}
           options={{
             title: 'Shopminders',
             
           }}
         />
         <Tab.Screen 
           name="settings"
           component={SettingsTab}
           options={{
             title: 'Settings'
           }}
          />
        </Tab.Navigator>
     </SafeAreaView>
       
       ):(

           <>
           <StatusBar style="light"/>
           <Stack.Navigator
           mode="card"
           screenOption={{
              
           }}
           >
           <Stack.Screen
           name="signIn"
           component={Contact}
           options={{
             title: 'Sign in',
             headerStyle: {
               backgroundColor: '#29434e',
               borderBottomColor: '#29434e',
             },
             headerTintColor: '#fff',
           }}
           />
           <Stack.Screen
          name="register"
          component={RegisterScreen}
          options={{
              cardStyleInterpolator:forFade,
          title: 'Register',
           headerStyle: {
           backgroundColor: '#29434e',
           borderBottomColor: '#29434e',
    },
    headerTintColor: '#fff',
   }}
 />
       <Stack.Screen
          name="forgetPass"
          component={forgetPass}
          options={{
              cardStyleInterpolator:forFade,
          title: 'forget Password',
           headerStyle: {
           backgroundColor: '#29434e',
           borderBottomColor: '#29434e',
    },
    headerTintColor: '#fff',
   }}
 />
           </Stack.Navigator>
           </>
       )}
        </NavigationContainer>
        
      
        
           
    )
}

const styles =StyleSheet.create({
    container:{
        padding:24
    },
    modalContent: {
        width:'100%'
    },listItem:{
        padding:20,
        backgroundColor:'gray',
        // flexDirection:'row',
        elevation:12,
        borderRadius:7,
        alignItems:'flex-start',
        justifyContent:'flex-start'
        // marginVertical:10,
      },
      textInput:{
          width:'90%',
          height:70,
          borderColor:'blue',
          borderWidth:1,
          fontSize:25
      },
      modalView:{
          flex:1,
          alignItems:'center',
          justifyContent:'center'
      },
      touchableSave:{
          backgroundColor:'orange',
          paddingHorizontal:100,
          alignItems:'center',
          marginTop:20
      }
      
})
