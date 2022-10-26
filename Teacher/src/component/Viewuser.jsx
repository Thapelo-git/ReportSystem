import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'
import '../Style/Viewuser.css'
function Viewuser() {
  const [Subject1, setSubject1] = useState('');
  const [Results1, setResults1] = useState('');
  const [Subject3, setSubject3] = useState('');
  const [Results3, setResults3] = useState('');
  const [Subject4, setSubject4] = useState('');
  const [Results4, setResults4] = useState('');
  const [Subject5, setSubject5] = useState('');
  const [Results5, setResults5] = useState('');
  const [Recommendation,setRecommendation]=useState('')
  const [data,setData]=useState({})
  let currentId = useParams()
  const {id}=currentId;

  useEffect(()=>{
    db.ref("Learner").on("value",(snap)=>{
      setData({
        ...snap.val(),
      })
    })
  },[id]);
  const update= () => {

    db.ref('Learner').child(id).update({Subject1:Subject1,Results1:Results1,
      Subject3:Subject3,Results3:Results3,Subject4:Subject4,Results4:Results4,
      Subject5:Subject5,Results5:Results5,Recommendation:Recommendation})
    .then(()=>db.ref('Learner').once('value'))
    .then(snapshot=>snapshot.val())
    .catch(error => ({
      errorCode: error.code,
      errorMessage: error.message
    }));
    
    
  };
  
  return (
    <>
    {
      Object.keys(data).map((userId)=>{
        if(userId === id){
          return(<>
          <div >
             <div className='input_column'>
          {/* <div className='imageCover'>
          <img src={data[id].url} className="image"/>
      </div> */}
      <div className='headings'>
      <div className='input_column'>
      <p>Name</p> <h3> {data[id].name}</h3> 
      </div>
      <div className='input_column'>
      <p>Surname</p> <h3> {data[id].surname}</h3>
      </div>
      <div className='input_column'>
      <p>Age</p> <h3> {data[id].age}</h3>
      </div>
      </div>
      <div className='headings'>
      <div className='input_column'>
      <p>ID number</p> <h3> {data[id].IDnumber}</h3> 
      </div>
      
      </div>
     
         <div className='viewRow'></div>
         </div>
          <div>
         <div className='viewRow'>
         <div className='input_column'>
          <p>Subject One</p>
            <select class="custom-select" id="gender3" 
          value={Subject1} onChange={e=>setSubject1(e.target.value)} >
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
        
          </div>
          <div className='input_column'>
          <p>Results One</p>
          <input type="tel"  name="Results" value={Results1} onChange={e=>setResults1(e.target.value)}
           placeholder='Enter Marks'></input>
           </div>
          </div>
          <div className='viewRow'>
         <div className='input_column'>
          <p>Subject Three</p>
            <select class="custom-select" id="gender3" 
          value={Subject3} onChange={e=>setSubject3(e.target.value)} >
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
        
          </div>
          <div className='input_column'>
          <p>Results Three</p>
          <input type="tel"  name="Results" value={Results3} onChange={e=>setResults3(e.target.value)}
           placeholder='Enter Marks'></input>
           </div>
          </div>
          <div className='viewRow'>
         <div className='input_column'>
          <p>Subject Four</p>
            <select class="custom-select" id="gender3" 
          value={Subject4} onChange={e=>setSubject4(e.target.value)} >
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
        
          </div>
          <div className='input_column'>
          <p>Results Four</p>
          <input type="tel"  name="Results" value={Results4} onChange={e=>setResults4(e.target.value)}
           placeholder='Enter Marks'></input>
           </div>
          </div>
          <div className='viewRow'>
         <div className='input_column'>
          <p>Subject Five</p>
            <select class="custom-select" id="gender3" 
          value={Subject5} onChange={e=>setSubject5(e.target.value)} >
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
        
          </div>
          <div className='input_column'>
          <p>Results Five</p>
          <input type="tel"  name="Results" value={Results5} onChange={e=>setResults5(e.target.value)}
           placeholder='Enter Marks'></input>
           </div>
          
          </div>
          <div className='viewRow'>
          <div className='input_column'>
          <p>Recommendation OR Any comment</p>
          <input type="tel"  name="Results" value={Recommendation} onChange={e=>setRecommendation(e.target.value)}
           placeholder='Enter Comment'></input>
           </div>
           </div>
         
         <div className='headings'>
          <button onClick={()=>update()} className='button'><label className='button_Lable'>Submit</label></button>
        </div>
        </div>
        </div>
</>
          )
        }
      })
    }
    </>
  )
}

export default Viewuser