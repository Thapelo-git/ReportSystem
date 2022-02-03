import React,{useEffect} from 'react'
import {  ToastAndroid,StyleSheet, Text, View ,Dimensions,Image} from 'react-native'
import { TextInput,Button } from 'react-native-paper';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { MaterialCommunityIcons } from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fontisto } from 'react-native-vector-icons/Fontisto';
import { auth, db } from './firebase';
import MapView,{Marker, PROVIDER_GOOGLE,Callout} from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';

// import Swiper from 'react-native-swiper';
const SettingsTab = ({navigation}) => {
//     const [userDetail, setUserDetail] = useState({
//         id: '',
//         name: '',
//         });
//         let id = db.auth().currentUser.uid;
//         const setToastMsg =msg=>{
//           ToastAndroid.showWithGravity(msg,ToastAndroid.SHORT,ToastAndroid.CENTER)
//       }
//     useEffect(() => {
//    db
// .ref('users')
// .on('value', (dataSnapshot) => {
// dataSnapshot.forEach((child) => {
// if (id === child.val().user.uuid) {
// setUserDetail({ //set state here
// id,
// name: child.val().user.name,
// });
// }
// });
// });
//     }, [input])

    return (
        <View style={{flex:1}}>
            <View style={{flex:3,justifyContent:'flex-start',alignItems:'center',marginTop:0,paddingTop:20}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Catoons</Text>
            </View>
            <MapView
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            region={{
                latitude:-23.896172,
                longitude:29.448626,
                latitudeDelta:0.015,
                longitudeDelta:0.0121,
            }}
            >
                <View>
                <Marker
                coordinate={{
                    latitude:-23.896172,
                longitude:29.448626,
                }}
                title='title'
                description='polokwane city'
                />
                {/* <Callout tooltip>
                    <View>
                        <View style={styles.bubble}>
                            <Text style={styles.name}>Jorden Hotel</Text>
                            <Text>description</Text>
                        </View>
                        <View style={styles.arrowBorder}></View>
                        <View style={styles.arrow}></View>
                    </View>
                </Callout> */}
                </View>
            </MapView>
            <StatusBar style='auto'/>
            {/* <View style={{flex:4,justifyContent:'center'}}>
                <Swiper>
                 latitude:37.78825,
                longitude:-122.4324,
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
            
        </View>
    )
}

export default SettingsTab

const styles = StyleSheet.create({
    map:{...StyleSheet.absoluteFillObject},
    bubble:{
        flexDirection:'row',
        alignSelf:'flex-start',
        backgroundColor:'#fff',
        borderColor:'#ccc',
        borderWidth:0.5,
        paddingTop:15,
        width:150
    },
    name:{
        fontSize:16,
        marginTop:5,
    },
    arrow:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        borderTopColor:'#fff',
        borderWidth:16,
        alignSelf:'center',
        marginTop:-32,
    },
    arrowBorder:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        borderTopColor:'#007a87',
        borderWidth:16,
        alignSelf:'center',
        marginTop:-0.5,
    },
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
