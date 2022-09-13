import React from "react";
import { SafeAreaView, View,Image,StatusBar,StyleSheet } from "react-native";
import LottieView from 'lottie-react-native';
const SplashScreen =({navigation})=>{

    setTimeout(()=>{
      navigation.replace('WelcomeScreen');
    }, 3000);

    return(

        <SafeAreaView style={styles.container}>
            
            <StatusBar
            backgroundColor="#0225A1"
            barStyle="light-content"
            />

<View style={styles.container}>
            
            <LottieView style={styles.hotel}
       source={require('../Lottifies/logo.json')} autoPlay loop/>
          </View>

        </SafeAreaView>

    )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen