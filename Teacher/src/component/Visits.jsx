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
      {
        Object.keys(Visits).map((id)=>
        <div >
            <>
                        <Card className="m-2 p-0 member-con d-flex">
                          <Card.Body>
                            <div className="container-xl cont-event">
                            {/* <h4>Subject  </h4>
                          
                              
                                <input className="form-control w-100 pt-2 mt-2" value={EventType[id].selector} onChange={e=>setSelector(e.target.value)}></input>
                                <h4>Marks</h4>
                                <input className="ps-1 mem-email pt-2" value={EventType[id].Results}></input> */}
                                
                                <h4>Date</h4>
          <p>{Visits[id].startDateone}</p>
          <h4>Time</h4>
          <p>{Visits[id].time}</p>
          <h4>Message</h4>
          <p>{Visits[id].message}</p>
                            </div>
                            <Button className="btn d-block acc-update-btn mt-4 bg-danger"
                            onClick={() => onDelete(id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                            </>
        {/* <div className='conView'>
          <div className='innerView'>
          <h4>Date</h4>
          <p>{Visits[id].startDateone}</p>
          
          <h4>Time</h4>
          <p>{Visits[id].time}</p>
          
          </div>
          <div className='innerView'>
          <h4>Message</h4>
          <p>{Visits[id].message}</p>
          </div>
          <button className='deletebtn' onClick={()=>onDelete(id)}>Delete</button>
        </div> */}
        
          
       
        </div>
        )
      }
      </div>
    
    </>
  )
}

export default Visits