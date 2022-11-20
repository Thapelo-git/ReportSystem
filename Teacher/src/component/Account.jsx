import React,{useState,useRef,useEffect} from 'react'
import '../Style/Account.css'
// import logo from "../IMAGES/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Alert} from 'react-bootstrap';
import { useAuth } from './contexts/AuthContext'
import { auth,db } from '../firebase'
function Account() {
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
    useEffect(()=>{
        db.ref("Learner").on("value",(snapshot)=>{
            // setUser({
            //     ...snapshot.val(),
            // })
            setFilteredDataSource({
                  ...snapshot.val(),
               });
        setMasterDataSource({
          ...snapshot.val(),
       });
        })
       
    },[]);
    const onDelete =(id)=>{
      db.ref(`/Learner/${id}`).remove()
     
     }
  return (
      <>
     <div className='dashboard_cover'>
        <div className='addbutton_cover'>
            
            </div>
            <div className='headings'>
        <h3>List of learners</h3>
      </div>
           
            <div className='users_container'>
              {
              // Object.keys(user).length>0?(
                Object.keys(filteredDataSource).map((id,index)=>{
                  return(

                 
            <div className='users'>
          <p>{filteredDataSource[id].IDnumber} </p>
            <p>{filteredDataSource[id].name} </p>
            <p>{filteredDataSource[id].surname}</p>
            
            <Button className="btn d-block acc-update-btn mt-4 bg-danger"
                            onClick={() => onDelete(id)}>Delete</Button>
            </div>
             )
            })
          // ):(<h3>No Users</h3>)
          }
            </div>
            
           
   
  
   
    </div>
    </>
  )
}

export default Account