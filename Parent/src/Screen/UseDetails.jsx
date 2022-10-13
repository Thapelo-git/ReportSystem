
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  FlatList,
  ImageBackground, ToastAndroid,
  Dimensions, ImageBackgroud, Animated, Pressable, TextInput
} from "react-native";
// import CircularProgress from 'react-native-circular-progress-indicator';
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from "react-native-vector-icons/AntDesign"
import { Card } from 'react-native-elements'
const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;
const { height } = Dimensions.get('window')
const imgContainerHeight = screenHeight * 0.4;
const sub = imgContainerHeight * 0.2;
const UserDetails = ({ navigation, route }) => {
  const details = route.params.data;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.imgContaner}>

        <ImageBackground source={{ uri: details.url }} style={{ width: "100%", height: "100%" }} >
          <View style={styles.headerContainer}
          >
            <View style={{
              backgroundColor: 'white',
              opacity: 0.7, width: 30,
              height: 30, justifyContent: 'center', alignItems: 'center',
              borderRadius: 10,
            }}>
              <Feather name="arrow-left" size={30} color='black'
                onPress={() => navigation.goBack()} />
            </View>
            <Text style={styles.headerTitle}></Text>
          </View>
        </ImageBackground>
      </View>
      <View style={styles.cardBox}>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
          <Text style={{ color: '#032B7A', fontWeight: 'bold', fontSize: 20 }} >

            Name:  {details.name}

          </Text>
          <Text style={{ color: '#032B7A', fontWeight: 'bold', fontSize: 20 }} >

Surname:  {details.surname}

</Text>
        </View>

        <Card.Divider />
        <Text>ID Number: {details.IDnumber} </Text>
        <Card.Divider style={{width:0}}/>
        <View style={{justifyContent:'flex-end',alignItems:'flex-end'}}>
        <Text>Age: {details.age}</Text>
        <Card.Divider style={{width:10}}/>
        </View>
        <Text style={{ color: '#032B7A', fontWeight: 'bold', fontSize: 20 }} >
Subjects and marks
</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Text>{details.Subject1}</Text>
        <Text>{details.Results1}</Text>
        {/* <CircularProgress
  value={details.Results1}
  inActiveStrokeColor={'#2ecc71'}
  inActiveStrokeOpacity={0.2}
  progressValueColor={'#fff'}
  valueSuffix={'%'}
/> */}
{
  details.Results1 >49 ? (
    <Text style={{color:'green',fontWeight:'bold'}}>Pass</Text>
  ):(
    <Text style={{color:'red',fontWeight:'bold'}}>Fail
    </Text>
  )

}
        <View>
    
</View>

        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Text>{details.Subject3}</Text>
        <Text>{details.Results3}</Text>
        {/* <CircularProgress
  value={details.Results1}
  inActiveStrokeColor={'#2ecc71'}
  inActiveStrokeOpacity={0.2}
  progressValueColor={'#fff'}
  valueSuffix={'%'}
/> */}
{
  details.Results3 >49 ? (
    <Text style={{color:'green',fontWeight:'bold'}}>Pass</Text>
  ):(
    <Text style={{color:'red',fontWeight:'bold'}}>Fail
    </Text>
  )

}
        <View>
    
</View>

        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Text>{details.Subject4}</Text>
        <Text>{details.Results4}</Text>
        {/* <CircularProgress
  value={details.Results1}
  inActiveStrokeColor={'#2ecc71'}
  inActiveStrokeOpacity={0.2}
  progressValueColor={'#fff'}
  valueSuffix={'%'}
/> */}
{
  details.Results4 >49 ? (
    <Text style={{color:'green',fontWeight:'bold'}}>Pass</Text>
  ):(
    <Text style={{color:'red',fontWeight:'bold'}}>Fail
    </Text>
  )

}
        <View>
    
</View>

        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
        <Text>{details.Subject5}</Text>
        <Text>{details.Results5}</Text>
        {/* <CircularProgress
  value={details.Results1}
  inActiveStrokeColor={'#2ecc71'}
  inActiveStrokeOpacity={0.2}
  progressValueColor={'#fff'}
  valueSuffix={'%'}
/> */}
{
  details.Results5 >49 ? (
    <Text style={{color:'green',fontWeight:'bold'}}>Pass</Text>
  ):(
    <Text style={{color:'red',fontWeight:'bold'}}>Fail
    </Text>
  )

}
        <View>
    
</View>

        </View>
      </View>
    </SafeAreaView>
  )
}

export default UserDetails

const styles = StyleSheet.create({
  cardBox: {
    paddingTop: 30,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    padding: 20,
    marginTop: imgContainerHeight - sub,
    backgroundColor: "white",
    flex: 1,

  },
  imgContaner: {
    width: screenWidth,
    height: imgContainerHeight,
    position: "absolute",
    top: 0,
  },
  headerContainer: {
    top: 10,
    flexDirection: 'row', justifyContent: 'space-between',
    alignContent: 'center'


  },
  header: {
    backgroundColor: '#fff',
    shadowColor: '#333333',
    shadowOffset: { width: -1, height: -2 },
    shadowRadius: 2,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20

  },
})