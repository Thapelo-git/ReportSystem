import React,{useState,useEffect} from 'react'
import { StyleSheet,View,Text, FlatList,TouchableOpacity ,SafeAreaView,Modal,
    LayoutAnimation, 
    ScrollView} from 'react-native';
import { Header,Button } from 'react-native-elements';
import Reviewform from './reviewform';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  SwipeableFlatList,
  SwipeableQuickActions,
  SwipeableQuickActionButton,
} from 'react-native-swipe-list';
import { StatusBar } from 'expo-status-bar';

import {db} from './firebase'
import {auth} from './firebase'

export default function Data({navigation}){
   const [shopminders,setShopminders]=useState([])
   
    useEffect(()=>{
        const ref= db.collection('shopminders');
        ref.onSnapshot((query)=>{
            const objs =[];
            query.forEach((doc)=>{
                objs.push({
                    id:doc.id,
                    ...doc.data(),

                });
            });
            setShopminders(objs)
        })
    },[])
  
    


    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
           <ScrollView>
            {/* <Reviewform addReview={addReview}/> */}
        <View style={styles.container}> 
      
        {shopminders.length?(
            <SafeAreaView>
            <SwipeableFlatList
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{padding:20,paddingBottom:100}}
            keyExtractor={(item)=>item.id.toString()}
            data={shopminders}
            renderItem={({item})=>(
                <View style={styles.listItem} >
                    
                    
                    
                
        <Text style={{fontWeight:'bold',fontSize:20}}>{item.name}  </Text>
                {/* <Button style={{width:'100%'}}title={"View"}onPress={()=>navigation.navigate('ReviewDetails',item)}/> */}
               
                
                </View>
                
            
            )}
            
            
                renderLeftActions={({item}) => (
                    <SwipeableQuickActions>
                     <SwipeableQuickActionButton
                     onPress={() => { setReviews(reviews.filter(itemm => itemm.key != item.key))
       
                       LayoutAnimation.configureNext(
                         LayoutAnimation.Presets.easeInEaseOut,
                       );
                     }}
                     
               
                  
                     text="Delete"
                     textStyle={{fontWeight: 'bold', color: 'red'}}
                     />
                     {/* <TouchableOpacity onPress={()=>setReviews(reviews.filter(itemm => itemm.key != item.key))}>
                  <Icon name="delete" size={30} color='red' />
                  </TouchableOpacity>  */}
                     
                    
                     
                   </SwipeableQuickActions>)}
            /> 
           
            </SafeAreaView>
        ):(
            <Text style={{fontWeight:'bold',fontSize:30}}>No users...</Text>
        )}
              

           
        </View>
        </ScrollView>
        <Header>

        
        {/* <Button  title={"AddUser"}onPress={()=>navigation.navigate('Adduser')}/>
         
        <Button title={"About"}onPress={()=>navigation.navigate('About')}/>
        <Button title={"Contact"}onPress={()=>navigation.navigate('Contact')}/> */}
    
    </Header>
    
        </SafeAreaView>
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
