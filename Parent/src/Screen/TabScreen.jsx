import React from 'react';

import Icon from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen';
import Profile from './Profile';
import AnnounceScreen from './AnnounceScreen';


const Tab = createMaterialBottomTabNavigator();




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
      <Tab.Screen
        name="Announcement"
        component={AnnounceScreen}
        options={{
          tabBarLabel: 'Announcement',
          tabBarIcon: ({ color }) => (
          
          <SimpleLineIcons name="note" type="material" color={color} size={24}/>
          ),
        }}
      />
    
      <Tab.Screen
        name="Setting"
        component={Profile}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color }) => (
          <Icon name="ios-settings" color={color} size={24} />
          ),
        }}
      />
      </Tab.Navigator>
    )
}

export default TabScreen
