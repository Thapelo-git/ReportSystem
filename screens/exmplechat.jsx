import React, { useState, useCallback, useEffect,useLayoutEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { StyleSheet, Text, View } from 'react-native'
import { auth } from './firebase';
import { fdb } from './firebase';
const exmplechat = () => {
    const [messages, setMessages] = useState([]);
    // const user = auth.currentUser;
    const [_id,set_id]=useState()
    const [createdAt,setCreatedAt]=useState()
    const [text,setText]=useState()
    const [user,setUser]=useState()
    // const {
      
       
    //    text,
    //    user,
    //    } = messages[0]
    useEffect(() => {
        
        fdb
        .collection('chats').add({
            _id,
            createdAt,
            text,
            user
        })
      
    }, [])
    
    const onSend = useCallback((messages = []) => {
      setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
      const {
        _id,
        createdAt,
        text,
        user,
        } = messages[0]
        fdb.collection('chats').add({
            _id,
            createdAt,
            text,
            user
        })
    }, [])
    useLayoutEffect(() => {
        const unsubscribe =fdb.collection('chats').orderBy('createdAt',
        'desc').onSnapshot(snapshot=>setMessages(
            snapshot.docs.map(doc=>({
                _id:doc.data()._id,
                createdAt:doc.data().createdAt.toDate(),
                text:doc.data().text,
                user:doc.data().user,

            }))
        ));
        return unsubscribe
    }, [])
    
    return (
        <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
         user={{
            _id: auth?.currentUser?.email,
            name: auth?.currentUser?.displayName,
            }}
        showAvatarForEveryMessage={true}
      />
    )
}

export default exmplechat

const styles = StyleSheet.create({})
