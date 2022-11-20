import { View, Text ,TouchableOpacity,TextInput,StyleSheet,Alert} from 'react-native'
import React,{useEffect, useRef,useState} from 'react'
import { FirebaseRecaptchaVerifierModal } from 'expo-firebase-recaptcha'
import {FirebaseRecaptchaVerifier} from 'expo-firebase-recaptcha'
import app, { auth } from '../Firebase'
import { Button } from 'react-native-elements'
const OTP = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
  const [verificationId, setVerificationId] = useState(null);
  const [verificationCode, setVerificationCode] =useState('');
  const [confirm,setConfirm]=useState(null)
  const [code,setCode]=useState('')
  const appVerifier = new app.default.auth.FirebaseRecaptchaVerifierModal()
//   const onAuthStateChanged=(user)=>{
//     setUser(user)
//     if(initializing) setInitializing(false)
//   }
//   useEffect(()=>{
//     const subscriber=auth.onAuthStateChanged(onAuthStateChanged)
//     return subscriber
//   },[])
  const signInWithPhoneNumber= async()=>{
    const confirmation = await auth.signInWithPhoneNumber('0766465828',appVerifier)
    setConfirm(confirmation)
  }
  const confirmCode=async ()=>{
    try{
        await confirm.confirm(code)
        alert('success')
    }catch(error){
        alert('Invalid code')
    }
    
  }
  return (
    <View>
      <TextInput value={code} onChangeText={(text)=>setCode(text)}/>
      <Button title='Confirm Code' onPress={()=>signInWithPhoneNumber()}/>
    </View>
  )
}

export default OTP