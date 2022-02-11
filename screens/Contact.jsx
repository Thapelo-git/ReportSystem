import React from 'react'
import {
  StyleSheet, View, Text, Image, SafeAreaView, Alert,
  ToastAndroid,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TextInput, Button } from 'react-native-paper';
import Loginform from './Loginform';
import { auth } from './firebase';
import AsyncStorage from '@react-native-async-storage/async-storage'
const Contact = ({ navigation }) => {
  const setToastMsg = msg => {
    ToastAndroid.showWithGravity(msg, ToastAndroid.SHORT, ToastAndroid.CENTER)
  }
  const Submit = async (data) => {
    const user = auth.currentUser.uid;
    console.log(user,'run <<<<<<')
    try {
      const { email, password } = data
      const user = await auth
        .signInWithEmailAndPassword(
          email.trim().toLowerCase(), password
        ).then(async res => {
          try {
            const jsonValue = JSON.stringify(res.user)
            await AsyncStorage.setItem("user", res.user.uid)
          } catch (e) {
            // saving error
            console.log('no data')
          }
        })
      // Alert.alert(
      //   'succesfully logged in'
      // )

      setToastMsg('succesfully logged in')
    }
    catch (error) {

      Alert.alert(
        error.name,
        error.message
      )
    }




    // console.log(data);
  }
  return (
    <SafeAreaView>
      <Loginform Submit={Submit} />
      <View style={styles.switchScreenText}>
        <TouchableOpacity onPress={() => navigation.navigate('forgetPass')}>
          <Text>
            forget Password
          </Text>

        </TouchableOpacity>
        <Text>
          Don't have an account yet?
        </Text>
      </View>
      <Button
        mode="outlined"
        style={styles.switchBtn}
        icon="account-plus"
        compact
        onPress={() => navigation.navigate('register')}
      >
        Register Account
      </Button>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({

  switchScreenText: {
    paddingTop: 20,
    paddingLeft: 10,
  },
  switchBtn: {
    margin: 10,
  },
});

export default Contact;
