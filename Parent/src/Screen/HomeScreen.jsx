
import React,{useEffect,useState,Component} from 'react'
import { db,auth } from '../../firebase'
import { View, Text, SafeAreaView, ImageBackground ,FlatList,ScrollView,
  Dimensions,StyleSheet,TextInput,Image,TouchableOpacity} from 'react-native'

  
import Feather from "react-native-vector-icons/Feather"
import { Card } from 'react-native-elements'
const screenHeight=Dimensions.get('screen').height
const imgContainer = screenHeight *0.2
const container =screenHeight *0.1
const HomeScreen = ({navigation,route}) => {
  const [error,setError]=useState('')
  const [Pusers,setPusers]=useState([])
  const [Prisoner,setPrisoner]=useState([])
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [phonenumber,setPhonenumber]=useState('')
  const [PrisonIdnumber,setPrisonIdnumber]=useState('')
  const [uid,setUid]=useState('')
  const user = auth.currentUser.uid;
  useEffect(()=>{
    db.ref(`/Parent/`+ user).on('value',snap=>{
      setName(snap.val() && snap.val().name);
  setEmail(snap.val().email)
  setPhonenumber(snap.val().phoneNo)
  
setUid(snap.val().uid)
    })
    db.ref('/Learner').on('value',snap=>{
          
      const Pusers=[]
         snap.forEach(action=>{
             const key=action.key
             const data =action.val()
             Pusers.push({
                 key:key,
                surname:data.surname,
                 name:data.name,
                 url:data.url,age:data.age,
                 IDnumber:data.IDnumber,
                 Subject1:data.Subject1,Results1:data.Results1,
      Subject3:data.Subject3,Results3:data.Results3,Subject4:data.Subject4,Results4:data.Results4,
      Subject5:data.Subject5,Results5:data.Results5,Recommendation:data.Recommendation,
      Subject6:data.Subject6,Results6:data.Results6,
      Subject7:data.Subject7,Results7:data.Results7,Subject5:data.Subject8,Results8:data.Results8,        
             })
       })
       setPrisoner(Pusers)
      //  if (PrisonIdnumber) {
      //   const newData = Pusers.filter(function (element) {
      //     const itemData = element.IDnumber ? element.IDnumber : ''
      //     return itemData.indexOf(PrisonIdnumber) > -1
      //   })
      //   setPusers(newData)
      // }
      
      
     })
  },[])
  console.log(Prisoner,'details.....')
  const [NewPrisoner,setNewPrisoner]=useState([])
  const [searchtext,setSearchtext] = useState('');
  const [Prisonidnumber,setPrisonidnumber]=useState('')
  const FilterFunction =(text)=>{
    if(text){
        const newData = Prisoner.filter(function(item){
            const itemData = item.IDnumber? item.IDnumber
            :''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf( textData)>-1;

        })
        setNewPrisoner(newData)
        setSearchtext(text)
    } 
  
  }
  const updateID=()=>{
    
    {
      Prisoner.map( (element)=>{
        if(element.IDnumber === Prisonidnumber){
         
          
          db.ref('Pfamily').child(user).set({PrisonId:Prisonidnumber,
          email:email,name:name,phonenumber:phonenumber,uid:uid})
           navigation.navigate('UserDetails')
        }else{
          setError('No such ID Number in our Place')
      }
  })
    }
  }
 

 

  return (
    <SafeAreaView style={{backgroundColor:'#fff'}}>
      
     
      <View 
      style={{width:'100%',height:imgContainer,backgroundColor:'#0225A2',
      justifyContent:'center',alignItems:'center',borderBottomLeftRadius:50,
      borderBottomRightRadius:50}}>
       <View
       style={{justifyContent:'center',alignItems:'center',width:200,height:200,backgroundColor:'#fff',
       marginTop:imgContainer,borderRadius:20}}>
         <Text style={{fontWeight:'bold',color:'gray',fontSize:30}}>Looking for</Text>
         <Text style={{fontWeight:'bold',color:'gray',fontSize:30}}>Someone?</Text>
       </View>
      </View>
      <View style={{marginTop:imgContainer-container, backgroundColor:'#fff',padding:20,height:'100%'}}>
      {/* 22758486 */}
     <Text style={{fontWeight:'bold'}}>Enter Your Learner Name</Text>

       <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        borderColor: "rgba(0,0,0,.2)",
                        borderWidth: 1,
                        height: 60,
                        borderRadius: 15,
                        paddingHorizontal: 5,
                        marginVertical: 10
                      }}
                    >
                      <View
                        style={{
                          justifyContent: "center",
                          alignItems: "center",
                          justifyContent:'center',
                          backgroundColor: "#DEEDF0",
                          width: 40,
                          height: 40,
                          borderRadius: 10
                        }}
                      ><Feather name="user" size={22}
 
                      style={{marginRight:10}}/></View>
                       <TextInput
                        style={styles.input}
                      value={searchtext}
                        placeholder="Name"
                        // onChangeText={(text) => Search(text)}
                        onChangeText={(text) => FilterFunction(text)}
                      />
                    </View>
       {/* <Text style={{color:'red'}}>{error}</Text>
       <TouchableOpacity style={styles.signinButton}
                       onPress={()=>updateID()}
              >
                <Text style={styles.signinButtonText}
                
                >Submit</Text>
            </TouchableOpacity> */}
            {
              NewPrisoner.map(item=>
                <View style={{padding:5}}>
                  <Text>If this is the correct person click to view all their infor</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("UserDetails",{data:item})}>
          <View style={{flexDirection:'row'}} >
              
                <View style={{padding:10}}>
              <Image source={{uri:item.url}} style={{height:80,width:80,borderRadius:40}}/>
              </View>
              <View style={{marginTop:20,}}>
              <View style={{flexDirection:'row',alignItems:'stretch',justifyContent:'space-between'}}>
              <Text
                style={{color:'#032B7A',fontWeight:'bold',fontSize:20}}
                >
                  
                 Name:  {item.name}
          
              </Text>
           
              </View>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                  
                <Text> Surname: {item.surname}</Text>
              </View>
           
              </View>
              </View>
              <Card.Divider/>
              </TouchableOpacity>
              </View>
                )
            }
      </View>
     
      
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  inputContainer:{
    backgroundColor:'#fff',
    
    borderRadius:8,
    borderWidth:0.5,
    borderColor:'#000',
    justifyContent:'center',
   
},
inputSubContainer:{
    flexDirection:'row',
    alignItems:'center'
},
signinButton:{
  backgroundColor:'#000',
  borderRadius:8,
  marginHorizontal:20,
  height:60,
  justifyContent:'center',
  alignItems:'center',
  marginTop:20,
},
signinButtonText:{
  fontSize:18,
  lineHeight:18 * 1.4,
  color:'#fff',
  
},
signinButton:{
  backgroundColor:'#000',
  borderRadius:8,
  marginHorizontal:20,
  height:60,
  justifyContent:'center',
  alignItems:'center',
  marginTop:20,
},
signinButtonText:{
  fontSize:18,
  lineHeight:18 * 1.4,
  color:'#fff',
  
},
})