import React from 'react'
import { StyleSheet,View,Text,Image,SafeAreaView} from 'react-native';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { TextInput,Button } from 'react-native-paper';
import {Formik} from 'formik';
import * as yup from 'yup'
import { color } from 'react-native-reanimated';
const Loginform = ({Submit}) => {
    const ReviewSchem = yup.object({
        email:yup.string().required().min(6),
        // location:yup.string().required().min(4),
        // gender:yup.string().required().test('is-num-1-100','gender must be Female/Male',
        // (val)=>{
        //     return val == 'Female' || val == 'Male';
        // }
        // ),
        password:yup.string().required().min(6),
        // Age:yup.string().required().test('is-num-1-100','Age must be number 1- 100',
        // (val)=>{
        //     return parseInt(val) < 101 && parseInt(val) > 0;
        // }
        // )
    })

    return (
        <SafeAreaView>
        <Formik 
               initialValues={{email:'',password:''}}
               validationSchema={ReviewSchem}
               onSubmit={(values,action)=>{
                   action.resetForm()
                Submit(values)
               }}
               >

                   {(props)=>(
                       <View>
                           
                           <TextInput 
                           style={styles.input}
                           label="Email"
                           placeholder='Enter Email..'
                           mode="outlined"
                           keyboardType="email-address"
                           onChangeText={props.handleChange('email')}
                           value={props.values.email}
                           onBlur={props.handleBlur('email')}
                           />
                           <Text style={styles.errortext}>{props.touched.email && props.errors.email}</Text>
                            <TextInput 
                           style={styles.input}
                           label="Password"
                           placeholder='Enter password..'
                           secureTextEntry
                           mode="outlined"
                           onChangeText={props.handleChange('password')}
                           value={props.values.password}
                           onBlur={props.handleBlur('password')}
                           />
                           <Text style={styles.errortext}>{props.touched.password && props.errors.password}</Text>
                           <View>
                           <Button title='submit' mode="contained" compact="false"
                           icon="account-arrow-right" onPress={props.handleSubmit}>
                               Sign in
                           </Button>
                           </View>
                          
                       </View>
                   )}
                    
                   </Formik>
                  
        </SafeAreaView>
    )
}
const styles =StyleSheet.create({
    container:{
        padding:24
    },
    input:{
        borderWidth:1,
        borderColor:'#ddd',
        padding:10,
        fontSize:18,
        borderRadius:6,
    },
    errortext:{
        color:'red'
    }
})

export default Loginform;
