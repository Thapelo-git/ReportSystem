import React ,{ useState, useContext, useEffect }from 'react'
import { StyleSheet,View,Text,Image,SafeAreaView, ScrollView,
ActivityIndicator,} from 'react-native';
import { Bubble, Send, SystemMessage,GiftedChat } from 'react-native-gifted-chat';
import {  IconButton } from 'react-native-paper';
import  Icon  from 'react-native-vector-icons/MaterialIcons';
import { auth } from './firebase';
import { fdb } from './firebase';

export default function About({route}){
    const [messages,setMessages]=useState([])
    // const { thread} =route.params const title:route.params.thread.name
//const  thread =route.params._id
    
    const user = auth.currentUser;
    //const currentUser = user.toJSON();
    const currentUser = user
    const handleSend = async (messages) =>{
      const text = messages[ 0].text;

      fdb
      .collection('THREADS')
      .doc(currentUser.uid)
      .collection('MESSAGES')
      .add({
        text,
        createdAt: new Date().getTime(),
        user: {
          _id: currentUser.uid,
          email: currentUser.email,
          name:currentUser.displayName
        }
      });
      
    // await fdb
    // .collection('THREADS')
    // .doc(currentUser.uid)
    // .set(
    //   {
    //     latestMessage: {
    //       text,
    //       createdAt: new Date().getTime()
    //     }
    //   },
    //   { merge: true }
    // );

    }

    useEffect(()=>{
      const messageslistener =fdb
      .collection('THREADS')
      .doc(currentUser.uid)
      .collection('MESSAGES')
      .orderBy('createdAt','desc')
      .onSnapshot(querySnapshot=>{
        const messages=querySnapshot.docs.map(doc =>{
          const firebaseData = doc.data();
          const data ={
            _id:doc.id,
            text:'',
            createdAt:new Date().getTime(),
            ...firebaseData
          };
          if(!firebaseData.system){
            
         
            data.user ={
              ...firebaseData.user,
              name:firebaseData.user.email,

            };
          }
          return data;
        })
        setMessages(messages)
      })
      return()=>messageslistener();
    },[])

    const renderBubble=(props)=>{
      <Bubble
      {...props}
      wrapperStyle={{
        right:{
          backgroundColor:'blue'
        }
      }}
      textStyle={{
        right:{
          color:'#fff'
        }
      }}
      />
    }

    const renderLoading=()=>{
      return(
        <View style={styles.loadingContainer}>
          <ActivityIndicator size='large' color='blue'/>
        </View>
      )
    }
    const renderSend=(props)=>{
      return(
        <Send {...props}>
          <View style={styles.sendingContainer}>
            <IconButton icon='send-circle' size={32} color='blue' />
          </View>

        </Send>
      )
    }
    const scrollToBottomComponent=()=>{
      return(
        <View>
          <IconButton icon='chevron-double-down' size={36} color='blue'/>
        </View>
      )
    }
    const renderSystemMessage=(props)=>{
      return(
        <SystemMessage 
        {...props}
        wrapperStyle={styles.systemMessageWrapper}
        textStyle={styles.systemMessageText}
          />
      )
    }
    return(
      
              
      <GiftedChat
      messages={messages}
      onSend={handleSend}
      user={{ _id: currentUser.uid }}
      placeholder='Type your message here...'
      alwaysShowSend
      showUserAvatar
      scrollToBottom
      // renderBubble={renderBubble}
      // renderLoading={renderLoading}
      // renderSend={renderSend}
      // scrollToBottomComponent={scrollToBottomComponent}
      // renderSystemMessage={renderSystemMessage}
    />
      
    )
}

const styles =StyleSheet.create({
    container:{
        // padding:24
        
        // justifyContent:'center'
    },
    stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch',
      },
      loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      },
      sendingContainer: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      bottomComponentContainer: {
        justifyContent: 'center',
        alignItems: 'center'
      },
      systemMessageWrapper: {
        backgroundColor: 'blue',
        borderRadius: 4,
        padding: 5
      },
      systemMessageText: {
        fontSize: 14,
        color: 'blue',
        fontWeight: 'bold'
      }
})