import React from 'react'
import { StyleSheet,View,Text,Button } from 'react-native';


export default function ReviewDetails({route,navigation}){

    // const {itemID}=route.params
    // const id =parseInt(itemID)
    
    return(
        <View style={styles.container}>
            
            <Text style={{fontWeight:'bold',fontSize:20}}>Name</Text>
            <Text style={{fontSize:20}}> 
            {navigation.getParam('name')}
            </Text>
            <Text style={{fontWeight:'bold',fontSize:20}}>Age</Text>
            <Text style={{fontSize:20}}>
            {navigation.getParam('Age')}
            </Text>
            <Text style={{fontWeight:'bold',fontSize:20}}>Surname</Text>
            <Text style={{fontSize:20}}>
            {navigation.getParam('surname')}
            </Text>
            <Text style={{fontWeight:'bold',fontSize:20}}>Location</Text>
            <Text style={{fontSize:20}}>
            {navigation.getParam('location')}
            </Text>
            <Text style={{fontWeight:'bold',fontSize:20}}>Gender</Text>
            <Text style={{fontSize:20}}>
            {navigation.getParam('gender')}
            </Text>
            
        </View>
    )
}

const styles =StyleSheet.create({
    container:{
        backgroundColor:'grey',
        borderRadius:7,
        marginVertical:10,
        alignItems:'center',
        
        // flexDirection:'row'
        
            
    }
})
