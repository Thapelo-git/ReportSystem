import React,{useRef} from 'react';
import { StyleSheet,View,Text } from 'react-native';
import { TextInput,Button } from 'react-native-paper';
import {Formik} from 'formik';
import * as yup from 'yup'

const Reviewform = ({addUser}) => {
//     const password=useRef({})
//   password.current=watch('password','')

    const ReviewSchem = yup.object({
        name:yup.string().required().min(2),
        email:yup.string().required().min(6),
        password:yup.string().required().min(6),
        confirmPassword:yup.string().required().oneOf([yup.ref('password'),null],'password does not match')
        
        //confirmPassword:yup.string().required().min(4),
        // Age:yup.string().required().test('is-num-1-100','Age must be number 1- 100',
        // (val)=>{
        //     return parseInt(val) < 101 && parseInt(val) > 0;
        // }
        // )
    })
    
    
    return (
        <>
           <View>
               <Formik 
               initialValues={{name:'',email:'',password:'',confirmPassword:''}}
               validationSchema={ReviewSchem}
               onSubmit={(values,action)=>{
                   action.resetForm()
                addUser(values)
               }}
               >

                   {(props)=>(
                       <View>
                            <TextInput 
                           style={styles.input}
                           mode="outlined"
                           label="Name"
                           placeholder='Enter name..'
                           onChangeText={props.handleChange('name')}
                           value={props.values.name}
                           onBlur={props.handleBlur('name')}
                           />
                           <Text style={styles.errortext}>{props.touched.name && props.errors.name}</Text>
                           <TextInput 
                           style={styles.input}
                           mode="outlined"
                           label="Email"
                           placeholder='Enter email..'
                           onChangeText={props.handleChange('email')}
                           value={props.values.email}
                           onBlur={props.handleBlur('email')}
                           />
                           <Text style={styles.errortext}>{props.touched.email && props.errors.email}</Text>
                            <TextInput 
                           style={styles.input}
                           mode="outlined"
                           label="password"
                           placeholder='Enter password..'
                           secureTextEntry
                           onChangeText={props.handleChange('password')}
                           value={props.values.password}
                           onBlur={props.handleBlur('password')}
                           />
                           <Text style={styles.errortext}>{props.touched.password && props.errors.password}</Text>
                            
                            <TextInput 
                            label="confrim password"
                           style={styles.input}
                           mode="outlined"
                           secureTextEntry
                           placeholder='Enter confirmPassword..'
                           onChangeText={props.handleChange('confirmPassword')}
                           value={props.values.confirmPassword}
                           onBlur={props.handleBlur('confirmPassword')}
                           />
                           <Text style={styles.errortext}>{props.touched.confirmPassword && props.errors.confirmPassword}</Text>
               
                           <Button 
                           style={styles.submitButton}
                           mode="contained"
                           compact={false}
                           
                           contentStyle={styles.button}
                           icon="account-plus"
                           onPress={props.handleSubmit}>
                               register Account
                           </Button>
                       </View>
                   )}
                    
                   </Formik>
                   {/*  */}
               
               </View> 
        </>
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
    },
    submitButton: {
        margin: 10,
        height: 50,
        justifyContent: 'center'
      }
})

export default Reviewform
