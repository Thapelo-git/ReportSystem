import { StyleSheet, Text, View ,StatusBar,TextInput,
    TouchableOpacity,Image,Dimensions,Alert,ScrollView} from 'react-native'
import React,{useState} from 'react'
import Feather from "react-native-vector-icons/Feather"
import { db,auth } from '../../Firebase'
const EditScreen = ({route}) => {
    const [name,setName]=useState(route.params.name)
    const [surname,setSurname]=useState(route.params.surname)
  const [email,setEmail]=useState(route.params.email)
  const [phonenumber,setphonenumber]=useState(route.params.phonenumber)
  const [uid,setUid]=useState(route.params.uid)
    const editprofile=(data)=>{
        // const {location,Price,} =data
    db.ref('Parent').child(uid).update({name,email,phonenumber,surname})
        .then(()=>db.ref('Parent').once('value'))
        .then(snapshot=>snapshot.val())
        .catch(error => ({
          errorCode: error.code,
          errorMessage: error.message
        }));
        // navigation.navigate('Profile')
      }
  return (
    <View style={{backgroundColor:'#fff',width:'100%',height:'100%'}}>
        
    <View style={{width:'100%',padding:20,}}>
   
       <ScrollView>
         <View style={styles.inputContainer}>
             <View style={styles.inputSubContainer}>
                 <Feather name="user" size={22}
                 color='#000'
                 style={{marginRight:10}}/>
                 
                 <TextInput placeholder="FullName"
                 selectionColor='gainsboro'
                 style={styles.inputText}
                 onChangeText={(text)=>setName(text)}
                 
                 value={name}
                 />
             </View>
         </View>
       
         <View style={styles.inputContainer}>
             <View style={styles.inputSubContainer}>
                 <Feather name="user" size={22}
                 color='#000'
                 style={{marginRight:10}}/>
                 
                 <TextInput placeholder="Surname"
                 selectionColor='gainsboro'
                 style={styles.inputText}
                 onChangeText={(text)=>setSurname(text)}
                 
                 value={surname}
                 />
             </View>
         </View>
         <View style={styles.inputContainer}>
             <View style={styles.inputSubContainer}>
                 <Feather name="mail" size={22}
                 color='#000'
                 style={{marginRight:10}}/>
                 
                 <TextInput placeholder="email@gmail.com"
                 selectionColor='gainsboro'
                 style={styles.inputText}
                 keyboardType='email-address'
                 onChangeText={(text)=>setEmail(text)}
          value={email}
         
                 />
             </View>
         </View>
         
       
         <View style={styles.inputContainer}>
             <View style={styles.inputSubContainer}>
                 <Feather name="phone" size={22}
                 color='#000'
                 style={{marginRight:10}}/>
                 
                 <TextInput placeholder="Phone number"
                 selectionColor='gainsboro'
                 style={styles.inputText}
                 keyboardType='numeric'
                 onChangeText={(text)=>setphonenumber(text)}
          value={phonenumber}
      
                 />
             </View>
         </View>
       
         <TouchableOpacity style={styles.signinButton}
         // onPress={()=>navigation.navigate('RegisterPhone')}
         onPress={()=>editprofile()}
         >
             <Text style={styles.signinButtonText}>Update</Text>
         </TouchableOpacity>
         </ScrollView>
        
        
    </View>
 </View>
  )
}

export default EditScreen

const styles = StyleSheet.create({
    
        container:{
            flex:1,
            backgroundColor:'#EC8F05'
        } ,
        headerContainer:{
            flexDirection:'row' ,
            alignItems:'center',
            justifyContent:'center',
            paddingVertical:40,
            paddingHorizontal:20
         },
         headerTitle:{
           fontSize:20,
           lineHeight:20 * 1.4,
        
           textAlign:'center'  
     
         },
         image:{
            height:80,
            width:100,
            
          },
                content:{
                    fontSize:20,
                    marginTop:10,
                    marginBottom:20,
                    marginHorizontal:20,
                },
                inputContainer:{
                    backgroundColor:'#fff',
            
           marginVertical:10,
            borderWidth:1,
            borderColor:'#000',
            justifyContent:'center',
                },
                inputSubContainer:{
                    flexDirection:'row',
                    alignItems:'center'
                },
                inputText:{
                    fontSize:18,
                    textAlignVertical:'center',
                    padding:0,
                    height:60,
                    color:'#000',
                    flex:1
            
                },
                signinButton:{
                    backgroundColor:'#000',
                    borderRadius:8,
                    marginHorizontal:20,
                    height:60,
                    justifyContent:'center',
                    alignItems:'center',
                    marginTop:20,
                },
                signinButtonText:{
                    fontSize:18,
                    lineHeight:18 * 1.4,
                    color:'#fff',
                    
                },
                title:{
                    fontSize:20,
                    lineHeight:20 * 1.4,
                    marginTop:20,
                    marginBottom:30,
                    marginHorizontal:20
                        },
                        signupContainer:{
                            marginHorizontal:20,
                            justifyContent:'center',
                            paddingVertical:20,
                            flexDirection:'row',
                            alignItems:'center'
                        },
                        accountText:{
                            fontSize:13,
                            lineHeight:13 * 1.4,
                            color:'#000'
                        },
                        signupText:{
                            fontSize:13,
                            lineHeight:13 * 1.4,
                            color:'#EC8F05',
                            marginLeft:5,
                    
                        },
    })
