import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import Table from 'react-bootstrap/Table'
import { db } from '../firebase'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form,Button,Alert} from 'react-bootstrap';
import {Card,Carousel} from 'react-bootstrap';
import {FaCheckCircle,FaTimesCircle} from 'react-icons/fa'
const StatusTD=styled.td`
font-weight:bold;
color:${(props)=>(props.type === "Pending" ? "blue":"")}
color:${(props)=>(props.type === "Accepted" ? "green" :"")}
color:${(props)=> (props.type === "Rejected"?"red":"")}
`
const Interveiws = () => {
  const [Results,setResults]=useState('')
  const [selector,setSelector]=useState()
  const [EventType,setEventType] = useState({});
  useEffect(()=>{
   
    
    db.ref('/Subject/').on("value",(snapshot)=>{
      setEventType({
            ...snapshot.val(),
        })
        
    })
  },[])
  const handleSubmit = (e)=>{
    e.preventDefault();
    
        db.ref('Subject').push({selector,Results})
       
}
const onDelete =(id)=>{
 db.ref(`/Subject/${id}`).remove()

}
  return (
    <div>
      <div className="container-xl mt-4 ms-4 p-2 w-75 h-75 ">
      <label class="text-muted">Add Results</label>
      <form onSubmit={handleSubmit}>
        <div class="input-group mb-6">
          <div class="input-group-prepend">
            <label class="input-group-text" for="gender3">Subject</label>
          </div>
          <select class="custom-select" id="gender3" 
          value={selector} onChange={e=>setSelector(e.target.value)} >
            <option selected>Choose...</option>
            <option  name="English(FAL)" >English(FAL)</option>
            <option name="English(HL)" >English(HL)</option>
            <option name="Agriculture" >Agriculture</option>
            <option name="History" >History</option>
            <option name="Geography" >Geography</option>
            <option name="Life-Science" >Life-Science</option>
            <option name="Physical-Science" >Physical-Science</option>
            <option name="Economics" >Economics</option>
            <option name="Accounting" >Accounting</option>
          </select>

          <div className="mb-7 mt-7 w-50 input-in">
          {/* value={Price} onChange={handleInputChange} */}
                  
         <input type="tel" class="form-control" name="Results" value={Results} onChange={e=>setResults(e.target.value)}
           placeholder='Enter Marks'></input>
              </div>
        </div>
        <Button type='submit' className="btn d-block acc-update-btn mt-4">Add </Button>
        </form>
        <div className="container-fluid mt-4 ms-0 me-0 p-3 d-flex events-container">
                  
                  { Object.keys(EventType).map((id,index)=>
                    
                        <>
                        <Card className="m-2 p-0 member-con d-flex">
                          <Card.Body>
                            <div className="container-xl cont-event">
                            <h4>Subject  </h4>
                          
                              
                                <input className="form-control w-50 pt-2 mt-2" value={EventType[id].selector} onChange={e=>setSelector(e.target.value)}></input>
                                <h4>Marks</h4>
                                <input className="ps-1 mem-email pt-2" value={EventType[id].Results}></input>
                                
                              
                            </div>
                            <Button className="btn d-block acc-update-btn mt-4 bg-danger"
                            onClick={() => onDelete(id)}>Delete</Button>
                            </Card.Body>
                        </Card>
                            </>

                      )}
                </div>
        
        </div>
    </div>
  )
}

export default Interveiws