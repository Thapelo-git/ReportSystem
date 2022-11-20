import React,{useRef,useState,useEffect} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Alert} from 'react-bootstrap';
import {Card,Carousel} from 'react-bootstrap';
import TimePicker from 'react-time-picker';
import { db } from '../firebase';
import '../Style/Visists.css'
function Visits() {
  let temDate=new Date()
  let nowTime=temDate.getDate()+'/'+(temDate.getMonth()+1)+'/'+temDate.getFullYear()
    const [startDate, setStartDate] = useState(temDate);
    const [time, setTime] = useState('10:00');
    const [message, setMessage] = useState('');
    const [Visits,setVisits]=useState([])
    let startDateone=startDate.getDate()+'/'+(startDate.getMonth()+1)+'/'+startDate.getFullYear()
    const handleSubmit=()=>{
      
      db.ref('Announcement').push({startDateone,time,message})
    }
    useEffect(()=>{
      db.ref('Announcement').on('value',(snapshot)=>{
        setVisits({
          ...snapshot.val(),
        })
      })
    },[])

    const handleDateChange=(e)=>{
     
      setStartDate(
       e
        );
      
    }
    const onDelete =(id)=>{
      db.ref(`/Announcement/${id}`).remove()
     
     }
    console.log(startDateone,'dfghjkdfghjk')
  return (
      <>
      <div className='heading'>
        <h3>Update Announcement</h3>
      </div>
      <div className='pickers'>
        <div>
          <p>Enter Date </p>
          {/* value={startDate} */}
        <DatePicker selected={startDate}  dateFormat='yyyy/MM/dd' 
         onChange={handleDateChange} value={startDate} name='startDate'/>
        {/* <p>{startDateone}</p> */}
        </div>
        <div>
          <p>Enter Time</p>
          <TimePicker onChange={setTime} value={time} />
        </div>
        <div className='input'>
          {/* <span>Your message</span> */}
          <textarea cols='password' rows='5'  required onChange={(e) => setMessage(e.target.value)}
            name='message' placeholder='message'/>
        </div>
    
      </div>
      <div className='button_cover'>
      <button className='button'
      onClick={()=>handleSubmit()}><h4 className='button_Lable'>Submit</h4></button>
      </div>
      <div>
      <div className='dashboard_cover'>
        
           
            <div className='users_container'>
              {
              // Object.keys(user).length>0?(
                Object.keys(Visits).map((id,index)=>{
                  return(

                 
            <div className='users'>
            <p>{Visits[id].startDateone} </p>
            <p>{Visits[id].time} </p>
            <p>{Visits[id].message}</p>
            
            <Button className="btn d-block acc-update-btn mt-4 bg-danger"
                            onClick={() => onDelete(id)}>Delete</Button>
            </div>
             )
            })
          // ):(<h3>No Users</h3>)
          }
            </div>
            
           
   
  
   
    </div>
      </div>
    
    </>
  )
}

export default Visits