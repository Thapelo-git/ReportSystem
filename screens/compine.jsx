import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Data from './data';
import About from './about';
import chathome from './chathome';
import exmplechat from './exmplechat';
const compine = () => {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator
           mode="card"
           screenOption={{
              
           }}
           >
               <Stack.Screen
           name="Data"
           component={Data}
           options={{
             title: 'create room',
             headerStyle: {
               backgroundColor: '#29434e',
               borderBottomColor: '#29434e',
             },
             headerTintColor: '#fff',
           }}
           />
           <Stack.Screen
           name="chathome"
           component={chathome}
           options={{
             title: 'list of rooms',
             headerStyle: {
               backgroundColor: '#29434e',
               borderBottomColor: '#29434e',
             },
             headerTintColor: '#fff',
           }}
           />
           <Stack.Screen
           name="About"
           component={About}
           options={({ route }) => ({
             title: 'route.params.name',
             headerStyle: {
               backgroundColor: '#29434e',
               borderBottomColor: '#29434e',
             },
             headerTintColor: '#fff',
           })}
           />
           <Stack.Screen
           name="exmplechat"
           component={exmplechat}
           options={({ route }) => ({
             title: 'examplechat',
             headerStyle: {
               backgroundColor: '#29434e',
               borderBottomColor: '#29434e',
             },
             headerTintColor: '#fff',
           })}
           />
           </Stack.Navigator>
    )
}

export default compine

const styles = StyleSheet.create({})
