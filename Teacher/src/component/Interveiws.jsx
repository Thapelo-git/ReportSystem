import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Table from 'react-bootstrap/Table'
import { db } from '../firebase'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Alert} from 'react-bootstrap';
import {Card,Carousel} from 'react-bootstrap';
import {FaCheckCircle,FaTimesCircle} from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.min.css';

const StatusTD=styled.td`
font-weight:bold;
color:${(props)=>(props.type === "Pending" ? "blue":"")}
color:${(props)=>(props.type === "Accepted" ? "green" :"")}
color:${(props)=> (props.type === "Rejected"?"red":"")}
`
const Interveiws = () => {
  const [Results,setResults]=useState('')
  const [selector,setSelector]=useState()
  const [Booking,setBooking]=useState([])
  useEffect(()=>{
    
    db.ref('ParentComment').on('value',snap=>{
      
      setBooking({...snap.val()});
    })
    
  },[])
  const onDelete =(id)=>{
    db.ref(`/ParentComment/${id}`).remove()
   
   }

  return (
    <div className='container'>
    {/* <div className='heading'>
      <h4>Payments</h4>
    </div> */}
  <div className='content grid'>
  {Object.keys(Booking).map((id,booking) => (
    <div className='box btn_shadow'>
          <tr >
            {/* <p>Ticket ID</p> */}
            <div className='viewRow'>
            <td>Learner ID:</td>
            <td>{Booking[id].IDnumber}</td></div>
            
            <div className='viewRow'>
            <td>Parent name:</td>
            <td>{Booking[id].CurrentName}</td>
            </div>
            <div className='viewRow'>
            <td>Learner name:</td>
            <td> {Booking[id].name}</td>
            </div>
            <div className='viewRow'>
            <td>Parent Phonenumber: </td>
            <td>{Booking[id].PhoneNum}</td>
            </div>
            <p>Parent Comment:</p>
            <p>{Booking[id].ParentComment}</p>
            <Button className="btn d-block acc-update-btn mt-4 bg-danger"
                            onClick={() => onDelete(id)}>Delete</Button>
          
          </tr>
          </div>
          ))}
          
  </div>
  
  </div>
  )
}

export default Interveiws