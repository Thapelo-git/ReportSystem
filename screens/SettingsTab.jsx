import React from 'react'
import {  ToastAndroid,StyleSheet, Text, View ,Dimensions,Image} from 'react-native'
import { TextInput,Button } from 'react-native-paper';
import { Icon} from 'react-native-elements';
import { auth } from './firebase';
import MapView from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';
// import Swiper from 'react-native-swiper';
const SettingsTab = ({navigation}) => {
    
        const setToastMsg =msg=>{
          ToastAndroid.showWithGravity(msg,ToastAndroid.SHORT,ToastAndroid.CENTER)
      }
    const onSignout =()=>{
        
        auth
        .signOut()
        .then(
            setToastMsg('successfully signed out')
        )
    }

    return (
        <View style={{flex:1}}>
            <View style={{flex:3,justifyContent:'flex-start',alignItems:'center',marginTop:0,paddingTop:20}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Catoons</Text>
            </View>
            <MapView
            style={StyleSheet.absoluteFillObject}
            provider={MapView.PROVIDER_GOOGLE}
            >

            </MapView>
            <StatusBar style='auto'/>
            {/* <View style={{flex:4,justifyContent:'center'}}>
                <Swiper>
                <View style={styles.slider1}>
                <Image
                 source={{url:'https://image.shutterstock.com/z/stock-vector-beautiful-nature-fairy-sitting-on-a-river-stone-part-1873139875.jpg'}}
                    style={{height:'100%',width:'100% '}}
                />
                </View>
                </Swiper>
                <View style={{flex:4}}> 

                </View>
            
            </View> */}
            <Button onPress={()=>onSignout() }>
                Sign Out
            </Button>
        </View>
    )
}

export default SettingsTab

const styles = StyleSheet.create({
slider1:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
},
slider2:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
},
slider3:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#fff'
}
})
