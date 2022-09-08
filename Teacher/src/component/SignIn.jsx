import React,{useRef,useState} from 'react'
import '../Style/SignIn.css'
import { auth } from '../firebase'
import { useAuth } from './contexts/AuthContext'
import { useNavigate,Link } from 'react-router-dom'

import {Button,Card, Form,Container,Alert} from 'react-bootstrap'
function SignIn() {
  const emailRef=useRef()
    const passwordRef = useRef()
    const {login} = useAuth()
    
  const [error,setError]=useState('')
  const navigate =useNavigate()
  const  handleSubmit = async (e)=>{
    e.preventDefault()
    
    try{
      setError('')
      
      await auth.signInWithEmailAndPassword(emailRef.current.value,passwordRef.current.value)
      .then( res=>{
        try {
            
              localStorage.setItem("AdminPuser", res.user.uid)
          } catch (e) {
            // saving error
            console.log('no data')
          }
          navigate('/')
      })
      
     
    } catch{
      setError('failed to sign in check Email/Password')
    }
  
  }
  return (
    <>
    <Container
    className='d-flex align-items-center justify-content-center'
    style={{minHeight:"100vh"}}>
      <div className='w-100' style={{maxWidth:"400px"}}>
        <Card>
          <Card.Body>
            <h2 className='text-center mb-4'>Log In</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id='email'>
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} requred/>
              </Form.Group>
              <Form.Group id='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} requred/>
              </Form.Group>
              <Button className='w-100' type="submit">Log In</Button>
            </Form>
            {/* <div className='w-100 text-center mt-3'>
              <Link to="/forgetpassword">forgot Password?</Link>
            </div> */}
          </Card.Body>
        </Card>
        {/* <div className='w-100 text-center mt-2'>
         Don't have an account?  <Link to='/Register'>Sign Up</Link>
        </div> */}
        </div>
        </Container></>
   
  )
}

export default SignIn