import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen';


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function CombinePayment() {
  return (
    
      <Stack.Navigator>
      <Stack.Screen name="payment" options = {{headerShown :false}}  component={payment} />
        <Stack.Screen name="paymentScreen" options = {{headerShown :false}}  component={paymentScreen} />
       
      </Stack.Navigator>

  );
}
// function CombineSettings() {
//   return (
    
//       <Stack.Navigator>
//       <Stack.Screen name="Settings" options = {{headerShown :false}}  component={SettingsScreen} />
//         <Stack.Screen name="Account Details"  component={AccountDetails} />
//         <Stack.Screen name="Help And Support"  component={help} />
       
//       </Stack.Navigator>
    
//   );
// }

const TabScreen = () => {
    return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{
        backgroundColor:'#0225A2',
          borderRadius: 15, elevation: 6, alignItems:'center', justifyContent: 'center', position:'absolute', marginVertical:20,marginHorizontal:25, height:65,paddingBottom:10, paddingLeft:10, paddingRight:10,bottom:20, paddingTop:10
      }}
      
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
          <Icon name="ios-home" color={color} size={24} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="Payments"
        component={CombinePayment}
        options={{
          tabBarLabel: 'Payments',
          tabBarIcon: ({ color }) => (
          <Icon name="ios-wallet" color={color} size={24} />
          ),
        }}
      /> */}
      {/* <Tab.Screen
        name="Chat"
        component={ChatScreen}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color }) => (
          <Icon name="ios-chatbox" color={color} size={24} />
          ),
        }}
      />
      <Tab.Screen
        name="Setting"
        component={CombineSettings}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
          <Icon name="ios-settings" color={color} size={24} />
          ),
        }}
      /> */}
      </Tab.Navigator>
    )
}

export default TabScreen
