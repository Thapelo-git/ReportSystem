
import React,{useState} from 'react'
import AnnounceUpcoming from './AnnounceUpcoming'
import AnnounceHistory from './AnnounceHistory'
import { StyleSheet, Text, View ,StatusBar,SafeAreaView,
    TextInput,TouchableOpacity,Image,Modal,Dimensions} from 'react-native'

const AnnounceScreen = () => {
    const [page,setPage]=useState(0)
  return (
    <SafeAreaView>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',
        width:250,height:60,backgroundColor:'gainsboro',borderRadius:30}}>
              <TouchableOpacity style={{width:130,height:58,backgroundColor:page === 0?'#0225A2':'gainsboro',justifyContent:'center',
            alignItems:'center',borderRadius:30}} 
            onPress={()=>setPage(0)}>
                  <Text style={{color:page===0?'#fff':'#000',fontWeight:'bold'}}>Upcoming</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{width:130,height:58,backgroundColor:page === 1?'#0225A2':'gainsboro',justifyContent:'center',
            alignItems:'center',borderRadius:30}}
            onPress={()=>setPage(1)}>
                  <Text style={{color:page===1?'#fff':'#000',fontWeight:'bold'}}>History</Text>
              </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',
        width:'100%',}}>
            {
                page === 0?(<AnnounceUpcoming/>):(null)
            }
            {
                page === 1?(<AnnounceHistory/>):(null)
            }
            
            </View>
          
            </View>
    </SafeAreaView>
  )
}

export default AnnounceScreen

const styles = StyleSheet.create({})