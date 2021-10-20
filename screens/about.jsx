import React from 'react'
import { StyleSheet,View,Text,Image,SafeAreaView, ScrollView} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';


export default function About(){
    
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
            <View style={{backgroundColor:'#fff',
        flex:1,flexDirection:'row'}}>
            <View style={{backgroundColor:'grey',flex:1,
    alignItems:'center'}}>
        <Text style={{fontWeight:'bold',paddingTop:1,fontSize:40,lineHeight:84}}>
              Thapelo Chaba
            </Text>
         <Image
            style={{width:150,height:200,borderRadius:50,borderColor:'white'}}
            source={require('../assets/picc.png')}/>
            <View style={{backgroundColor:'white',borderRadius:7,
        marginVertical:10}}>
        <Text style={{fontWeight:'bold',
        fontSize:30,paddingTop:3}}>Contacts</Text>

            </View>
            <Icon   name="phone" size={30} color='black'/>
            <Text>Phone Number : 0766465828</Text>
            {/* <Icon   name="Location" size={30} color='black'/> */}
            <Text>Address : Moletjie Ga-Makgwakgwana 0709</Text>
            <Icon   name="email" size={30} color='black'/>
            <Text>Email : chabathapelo1@gmail.com</Text>
            <Icon   name="facebook" size={30} color='black'/>
            <Text>Facebook : thapelo chaba</Text>
            <View style={{backgroundColor:'white',borderRadius:7,
        marginVertical:10}}>
        <Text style={{fontWeight:'bold',
        fontSize:30,paddingTop:3}}>Profile</Text>
            </View>
            
            <Text>
            Thapelo is a flexible,posses excellent time keeping skills .
             I am an self-motivated,responsible and hard working person.
              I am a mature team worker and adaptable to all challenging 
              situations.
               I am able to work well both 
            in a team environment as well as using own initiative. 
            </Text>

        </View>
           
            
        <View style={{backgroundColor:'white',flex:1,height:600,alignItems:'center'}}>
            <View style={{backgroundColor:'grey',borderRadius:7,
        marginVertical:10}}>
        <Text style={{fontWeight:'bold',
        fontSize:30,paddingTop:3}}>Qualifications</Text>
            </View>
           
            <Text style={{fontWeight:'bold',fontSize:20,paddingTop:3}}>
            National senior certificate</Text>
            <Text>
            Selamodi secondary school
              
            </Text>
            <Text>2011-2015</Text>
            <Text style={{fontWeight:'bold',fontSize:20,paddingTop:3}}>
            National Diploma Information
              Technology</Text>
            <Text>
            Tshwane University of Technology
             
            </Text>
            <Text>2016-2019</Text>
            <View style={{backgroundColor:'grey',borderRadius:7,
        marginVertical:10}}>
        <Text style={{fontWeight:'bold',
        fontSize:30,paddingTop:3}}>Languages</Text>
            </View>
            <Text style={{fontWeight:'bold',fontSize:20,paddingTop:3}}>
            Sepedi</Text>
            <Text style={{fontWeight:'bold',fontSize:20,paddingTop:3}}>
            English</Text>
            <View style={{backgroundColor:'grey',borderRadius:7,
        marginVertical:10}}>
        <Text style={{fontWeight:'bold',
        fontSize:30,paddingTop:3}}>Interests</Text>
       
            </View>
            <Icon name="computer" size={30} color='black'/>
            <Text style={{fontWeight:'bold',fontSize:20,paddingTop:3}}>
            reading</Text>
            
            <View style={{backgroundColor:'grey',borderRadius:7,
        marginVertical:10}}>
        <Text style={{fontWeight:'bold',
        fontSize:30,paddingTop:3}}>Skills</Text>
       
            </View>
            <Text style={{fontWeight:'bold',fontSize:20,paddingTop:3}}>
            Html</Text>
            <Text style={{fontWeight:'bold',fontSize:20,paddingTop:3}}>
            css</Text>
            <Text style={{fontWeight:'bold',fontSize:20,paddingTop:3}}>
            c++</Text>
        </View>
        </View>
        </ScrollView>
        </SafeAreaView>
    )
}

const styles =StyleSheet.create({
    container:{
        // padding:24
        
        // justifyContent:'center'
    },
    stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch',
      },
})