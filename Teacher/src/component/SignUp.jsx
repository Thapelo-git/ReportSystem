import React,{useRef,useState} from 'react'
// import '../Style/SignIn.css'
import { Formik } from 'formik'
import * as Yup from 'yup'
import { useAuth } from '../component/contexts/AuthContext'
import {Button,Card, Form,Container,Alert} from 'react-bootstrap'
import { db,auth } from '../firebase'
import {useNavigate,Link} from 'react-router-dom'

function SignUp() {
  // /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
 // /^([0]{1}|\+?[234]{3})([7-9]{1})([0|1]{1})([\d]{1})([\d]{7})$/g,
  const navigate =useNavigate()
  const validate=Yup.object({
    email:Yup.string().email().required("Email is required"),
    phonenumber:Yup.string().min(10).max(10).required("Phone number is required")
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,

      "Invalid phone number"
    ),
    confirmPassword:Yup.string().min(6).required('Confirm Password is required'),
    password:Yup.string().min(6).required('Confirm Password is required')
  })
  const [error, setError] = useState('')
  const handleSubmit = async (data) => {
    // e.preventDefault()
    const {email,phonenumber,password,confirmPassword}=data
    if (password !== confirmPassword) {
        return setError('password do not match')
    }
    try {
        setError('')

       
        await auth.createUserWithEmailAndPassword(email, password)
            .then(res => {
                const user={
                    
                    email: email,
                    phonenumber: phonenumber,
                    uid: res.user.uid
                }
                  console.log(user)
                db.ref('/AdminPuser')
                .child(res.user.uid)
                .set(user)
                .then((result) => {
                    console.log(result, "<<<<<<<<<<<<<<<<<<<<<<<<")
                    try {
            
                        localStorage.setItem("AdminPuser", res.user.uid)
                    } catch (e) {
                      // saving error
                      console.log('no data')
                    }
                    navigate('/')
                }).catch((error) => {
                    console.log(error, "----------------------")
                    setError(error)
                })
            })
    } catch (error) {
        setError('failed to create an account',)
    }


}
  return (
    <div>
      <Formik
      initialValues={{
        email:'',phonenumber:'',confirmPassword:'',password:''
      }}
      validationSchema={validate}
      onSubmit={(values,action)=>{
        action.resetForm()
        handleSubmit(values)
      }}
      >
        {
          (formik)=>{
            const {
              values,handleChange,handleBlur,errors,touched,
              isValid,dirty
            }=formik;
            return(
            <>
           
        
        <Container
    className='d-flex align-items-center justify-content-center'
    style={{minHeight:"100vh"}}>
      <div className='w-100' style={{maxWidth:"700px"}}>
         <Card>
          <Card.Body>
            <h2 className='text-center mb-4'>Sign Up</h2>
            
            {error && <Alert variant="danger">{error}</Alert>}
            <Form >
           
    <div class="mb-3 row">
    <label  class="col-sm-4 col-form-label">Phone Number</label>
    <div class="col-sm-8">
    <input placeholder='Enter Phonenumber' type='text' class="form-control" name='phonenumber'
        value={values.phonenumber}  onChange={handleChange} onBlur={handleBlur}
        />
        {
          errors.phonenumber && touched.phonenumber?<span className='error'>{errors.phonenumber}</span>:null
        }
    
    </div>
    </div>
            <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-4 col-form-label">Email</label>
    <div class="col-sm-8">
       <input placeholder='Enter Email' type='email' class="form-control" name='email'
        value={values.email} onChange={handleChange} onBlur={handleBlur}
        />{
          errors.email && touched.email?<span className='error'>{errors.email}</span>:null
        }
    
    </div>
  </div>
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-4 col-form-label">Password</label>
    <div class="col-sm-8">
    <input placeholder='Enter Password' type='password' class="form-control" name='password'
         value={values.password} onChange={handleChange} onBlur={handleBlur}/>
       {
          errors.password && touched.password?<span className='error'>{errors.password}</span>:null
        }
      
    </div>
  </div>
  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-4 col-form-label">Confirm Password</label>
    <div class="col-sm-8">
    <input placeholder='Confirm Password' type='password' class="form-control" name='confirmPassword'
         value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur}/>
      {
          errors.confirmPassword && touched.confirmPassword?<span className='error'>{errors.confirmPassword}</span>:null
        }
      
    </div>
  </div>
          
              <Button  className='w-100' onClick={()=>handleSubmit}>Sign Up</Button>
            </Form>
          </Card.Body>
          <div class="mb-3 row">
          {/* <div className='w-100 text-center mt-2'>
          Already have an account? 
        </div> */}
    {/* <div class="col-sm-6">
    <Link to="/" >Sign In</Link>
    </div> */}
    </div>
          
        </Card>
        
        </div>
        </Container>
 
       </>)
          }
      }
      </Formik>
    </div>
  )
}

export default SignUp