import React, { useState ,useEffect} from 'react'
import { StyleSheet, Text, View ,TouchableHighlight,
ToastAndroid,TouchableOpacity,Image} from 'react-native'
import { auth } from './firebase'
import {db} from './firebase'
import { Avatar,Button } from 'react-native-paper'
import * as ImagePicker from 'expo-image-picker';
import { Alert } from 'react-native'
const ShopmindersTap = () => {
    const [selectedImage, setSelectedImage] = useState(null);
  
    const [email,setEmail]=useState(auth.currentUser?.email)
    const [list,setList]=useState([])
    const user = auth.currentUser;
    // useEffect(()=>{
    //   // db.ref(`/user/${user.uid}`).on('value',snap=>{
        
    //   //    setName(snap.val().displayName);
        
    //   // })

    //   db.ref(`user/`).orderByChild('emailId')
    //   .equalTo(email).once('value')
    //   .then(snapshot=>{
    //     // if(snapshot.val()== null){
          
    //     // }
    //     console.log(snapshot.val())
    //   })
      
    // },[])
    const [name, setUserDetail] = useState('');
      let id = auth.currentUser.uid;
     
//   useEffect(() => {
//  db
// .ref('user/')
// .on('value', (dataSnapshot) => {
// dataSnapshot.forEach((child) => {
// //if (id === child.val().user.uuid) {
// setUserDetail({ set state here

// name: child.val().name,
// });
// // }
// });
// });
//   }, [id])
    
    const setToastMsg =msg=>{
        ToastAndroid.showWithGravity(msg,ToastAndroid.SHORT,ToastAndroid.CENTER)
    }
    let openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
        if (permissionResult.granted === false) {
          alert("Permission to access camera roll is required!");
          return;
        }
    
        let pickerResult = await ImagePicker.launchImageLibraryAsync();
        if (pickerResult.cancelled === true) {
            return;
          }
      
          setSelectedImage({ localUri: pickerResult.uri });
      }
      if (selectedImage !== null) {
        return (
          <View style={styles.container}>
            <Image
              source={{ uri: selectedImage.localUri }}
              style={styles.thumbnail}
            />
             {/* {auth.currentUser?.email} */}
                        {/* <Text style={{fontWeight:'bold',fontSize:30}}></Text>  */}
           
             <Button mode="contained" onPress={openImagePickerAsync}>
            Upload ur own image
            </Button> 
            
        
 
          </View>
        );
      }
    
    // const options={
    //     title:'pick an image',
    //     storageOptions:{
    //         skipBackup:true,
    //         path:'images'
    //     }
    // }
    //  const openPicker=()=>{
    //      ImagePicker.showImagePicker(options,(response)=>{
    //         if(response.didCancel){
    //             setToastMsg('Cancelled image selection')
    //         }else if(response.error){
    //             setToastMsg('permission not satisfied')
    //         }else if(response.customButton){
    //             setToastMsg('response.errorMessage')
    //         }else{
    //            const source={uri:response.url}
    //         } 
    //      })
    //  }
    // const uploadImage=()=>{
    //     let options={
    //         mediaType:'photo',
    //         quality:1,
    //         includeBase64:true,
    //     }
    //     launchImageLibrary(options,response=>{
    //         if(response.didCancel){
    //             setToastMsg('Cancelled image selection')
    //         }else if(response.errorCode =='permission'){
    //             setToastMsg('permission not satisfied')
    //         }else if(response.errorCode =='others'){
    //             setToastMsg(response.errorMessage)
    //         }else if(response.assets[0].fileSize>2097152){
    //             Alert.alert('Maximum image size exceeded','plz choose image under 2 MB',
    //             [{text:'Ok'}])
    //         }else{
    //            setPic(response.assets[0].base64) 
    //         }
    //     })
    // }
    const onSignout =()=>{
        
      auth
      .signOut()
      .then(
          setToastMsg('successfully signed out')
      )
  }
    return (
        <View>
        {/* <View style={styles.centerContant}>
            <TouchableHighlight
            // onPress={()=>uploadImage()}
            underlayColor="rgba(0,0,0,0)">
                <Avatar.Image
                size={250}
                source={{url:'data:image/png;base64,'+Pic}}/>
            </TouchableHighlight>
            </View> */}
            {/* <Image source={{ uri: 'https://i.imgur.com/TkIrScD.png' }} style={styles.logo} />
      <Text style={styles.instructions}>
        To share a photo from your phone with a friend, just press the button below!
      </Text> */}
            <View
            style={[styles.centerContant,{marginTop:25,flexDirection:'row'}]}>
            {/* <Button mode="contained" onPress={()=>openPicker}>
            Upload image
            </Button> */}
            {/* <Button mode="contained" onPress={()=>uploadImage()}>
            Remove Image
            </Button> */}
            </View>
            <Image
              source={{ uri: 'https://image.shutterstock.com/image-vector/male-avatar-profile-picture-use-600w-193292033.jpg'}}
              style={styles.thumbnail}
            />
             {/* <Text style={{fontWeight:'bold',fontSize:30}}>{auth.currentUser?.email}</Text> */}

             <Button mode="contained" onPress={openImagePickerAsync}>
            Upload ur own image
            </Button> 
           <Text>{name}</Text>
           <Text>name:{auth?.currentUser?.displayName}</Text>
           <Button onPress={()=>onSignout() }>
                Sign Out
            </Button>
        </View>
    )
}

export default ShopmindersTap

const styles = StyleSheet.create({
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: "contain"
      }
})
