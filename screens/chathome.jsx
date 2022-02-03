import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { List, Divider } from 'react-native-paper';
import { fdb } from './firebase';
import { auth } from './firebase';
const chathome = ({navigation}) => {
    const [threads, setThreads] = useState([]);
  const [loading, setLoading] = useState(true);
   const user=auth.currentUser
    useEffect(() => {
        const unsubscribe = fdb
          .collection('THREADS')
          .orderBy('latestMessage.createdAt', 'desc')
          .onSnapshot(querySnapshot => {
            const threads = querySnapshot.docs.map(documentSnapshot => {
              return {
                _id: documentSnapshot.id,
                // give defaults
                name: '',
    
                latestMessage: {
                  text: ''
                },
                ...documentSnapshot.data()
              };
            });
    
            setThreads(threads);
    
           
          });
          return () => unsubscribe();
        }, []);
  
    return (
        <View style={styles.container}>
      <FlatList
        data={threads}
        keyExtractor={item => item._id}
        ItemSeparatorComponent={() => <Divider />}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('About',{threads: item.name} )}
          >
            <List.Item
              title={item.name}
              description={item.latestMessage.text}
              titleNumberOfLines={1}
              titleStyle={styles.listTitle}
              descriptionStyle={styles.listDescription}
              descriptionNumberOfLines={1}
            />
          </TouchableOpacity>
        )}
      />
    </View>
    )
}

export default chathome

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f5f5',
        flex: 1
      },
      listTitle: {
        fontSize: 22
      },
      listDescription: {
        fontSize: 16
      }
})
