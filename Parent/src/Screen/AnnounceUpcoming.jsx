import { SafeAreaView, StyleSheet, Text, View ,Dimensions} from 'react-native'
import React,{useState,useEffect,} from 'react'
import { db } from '../../Firebase'
import { Card } from 'react-native-elements'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import moment from 'moment'
const deviceWidth=Dimensions.get("window").width
const AnnounceUpcoming = () => {
    const [Visits,setVisits]=useState([])
    useEffect(()=>{
    
    
        db.ref('/Announcement').on('value',snap=>{
               
          const Visits=[]
             snap.forEach(action=>{
                 const key=action.key
                 const data =action.val()
                 Visits.push({
                     key:key,
                     startDateone:data.startDateone,
                     time:data.time,
                     message:data.message
  
                 })
                })
                console.log(Visits)
                  const newData = Visits.filter(function(item){
                
                      const itemData =  moment(moment().add(0, 'days')).isBefore(moment(item.startDateone).format('YYYY/MM/DD'))?
             
        (moment(item.startDateone).format('YYYY/MM/DD'))
                      :   ( '')
                      console.log(item.startDateone)
                      
                      return itemData;
      
                  })
                  setVisits(newData)
             
                 
                }
              
        )
         
         
      },[])
  return (
    <SafeAreaView>
      {Visits.map(element=><>
     <View style={{width:deviceWidth *0.9,top:30,backgroundColor:'#DEEDF0',height:80}}>
     <View style={{flexDirection:'row',justifyContent:'space-around',paddingVertical:12,
     alignItems:'stretch'}}>
      {/* <Text>Date</Text> */}
     <FontAwesome name='calendar' size={20}/>
     <Text>{element.startDateone}</Text>
     </View>
     <View  style={{flexDirection:'row',justifyContent:'space-around',
     alignItems:'stretch',paddingVertical:12,}}>
      {/* <Text>Time</Text> */}
     <FontAwesome name='clock-o' size={20}/>

     <Text>      {element.time}</Text>
     </View>
     <View  style={{flexDirection:'row',justifyContent:'space-around',
     alignItems:'stretch',paddingVertical:12,}}>
    
     <SimpleLineIcons name="note" type="material" />
     <Text>      {element.message}</Text>
     </View>
     </View>
        {/* <Card.Divider/> */}
     </>)}
    </SafeAreaView>
  )
}

export default AnnounceUpcoming

const styles = StyleSheet.create({})