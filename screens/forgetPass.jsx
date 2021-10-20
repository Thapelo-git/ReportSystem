import React, { useState } from 'react'
import { Alert } from 'react-native';
import { StyleSheet, Text, View } from 'react-native'
import { TextInput,Button } from 'react-native-paper'
import { auth } from './firebase';
export default function forgetPass() {
    const [email,setEmail]=useState();
    const reset =async()=>{
        try{
            await auth
            .sendPasswordResetEmail(email)
            setEmail('')
        }catch(error){
            Alert.alert(error.message)
        }
    }
    return (
        <View>
            <Text>Forget password</Text>

            <TextInput
            label="Email"
            mode="outlined"
            placeholder="Enter your email"
            value={email}
            onChangeText={(e)=>(setEmail(e))}
            />
            <Button onPress={()=>reset()}>
                Submit
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({})
