import React from 'react'
import { StyleSheet, Text, View,SafeAreaView } from 'react-native'
import Reviewform from './reviewform'
import { TextInput,Button } from 'react-native-paper';
import {auth} from './firebase'
import {db} from './firebase'
import { Alert,ToastAndroid } from 'react-native';
const RegisterScreen = ({navigation}) => {
  const setToastMsg =msg=>{
    ToastAndroid.showWithGravity(msg,ToastAndroid.SHORT,ToastAndroid.CENTER)
}
//then(res =>{
 // res.user.sendEmailVerification().
    const addUser= async (data)=>{
      try{
        const {email,password,name} =data
      const user = await auth
      .createUserWithEmailAndPassword(
        email.trim().toLowerCase(),password
      ).then(res =>{
        db.ref(`/user`).child(res.user.uid).set({
          name:name,
          email:email,
          uid:res.user.uid
        })
        })
      
     setToastMsg('succesfully registered')

      }
      catch(error){
        if(error.code === 'auth/email-already-in-use'){
          Alert.alert(
            'That email adress is already inuse'
          )
        }
        if(error.code === 'auth/invalid-email'){
          Alert.alert(
            'That email address is invalid.'
          )
        }
        else{
          Alert.alert(error.code)
        }
        
      }
      
    }

    return (
        <SafeAreaView>
            <Reviewform addUser={addUser}/>
            <View style={styles.switchScreenText}>
        <Text>Do you already have an account?</Text>
      </View>
        <Button
          mode="outlined"
          style={styles.switchBtn}
          icon="account-arrow-right"
          compact
          onPress={() => navigation.goBack()}
        >
          Sign in
        </Button>
        </SafeAreaView>
    )
}

export default RegisterScreen

const styles = StyleSheet.create({
    switchScreenText: {
        paddingTop: 20,
        paddingLeft: 10,
      },
      switchBtn: {
        margin: 10,
      },
})
