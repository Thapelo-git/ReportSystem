import React from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const ForgetPassword = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')} >
                <Icon name="arrow-back" size={25} color='black' style={{ marginTop: 20, marginLeft: 15 }} ></Icon>
            </TouchableOpacity>
            <ScrollView >
                <View style={styles.container1} >
                    <Image
                        style={{ marginTop: 10, elevation: 5, }}
                        source={require('../Images/forgetP.png')}
                    />
                    <Text style={{ color: 'gray' }}> Enter Your Email Address And We  Will Email</Text>
                    <Text style={{ color: 'gray' }}>You A Link To Reset Password</Text>
                    <View style={styles.inputCon}>

                        <View style={styles.lovers} >
                            <Icon name='email' size={22} color='black' style={{ margin: 9 }}></Icon>
                            <TextInput
                                style={{ width: '100%', height: 40, borderWidth: 0 }}
                                autoFocus={true}
                                placeholder="ENTER YOUR EMAIL "  ></TextInput>
                        </View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('ForgetPasswordSuccessFul')}
                            style={{ backgroundColor: '#0000CD', width: '75%', height: 45, borderRadius: 10, alignItems: 'center', elevation: 10, marginTop: 30 }}>
                            <Text style={{ padding: 8, color: '#fff', fontSize: 20 }}>
                                CONTINUE
                            </Text>
                        </TouchableOpacity>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1,
        // justifyContent:'center',
        // alignItems:'center',

    },
    container1:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 80,
    },
    inputCon: {
        width: '95%',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 5,
        marginTop: 0,

    },
    input: {
        shadowColor: '#171717',
        shadowOffset: { width: 10, height: 40 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 5,
        backgroundColor: '#fff',
        height: 40,
        width: '100%',
        marginBottom: 8,

    },
    button: {
        width: '60%',
        margin: 250,
        marginBottom: 5,
        marginTop: 8,
        height: 25,
        borderRadius: 8,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
        color: 'white',
        alignItems: 'center',
    },
    lovers: {

        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        marginTop: 50,
        backgroundColor: '#ebebeb',
        borderColor: '#000',
        borderWidth: 1,
        borderRadius: 5,
        height: 40,
        width: '100%',
        margin: 8,
        elevation: 10,


    },
    text: {
        flexDirection: 'row',
        color: 'gray',
        elevation: 10,
    }

})
export default ForgetPassword