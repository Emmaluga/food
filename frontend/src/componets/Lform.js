import React, { useState } from 'react'
import {Container, Row, Col}  from "react-bootstrap"


import { FaEye } from "react-icons/fa";

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"


const loginSchema = yup.object().shape({

  email: yup.string().email().required(),

  password: yup.string().required()
  .min(10)
  .matches(RegExp('(.*[a-z].*)'), 'lowerCase')
  .matches(RegExp('(.*[A-Z].*)'), 'Uppercase')
  .matches(RegExp('(.*\\d.*)'), 'Number')
  .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), 'Special'),


})

const Lform = () => {
  const [showPassword, setShowPassword ] = useState(false)
  const togglePasswordLogic = ()=> {
    setShowPassword(showPassword ? false : true  )
  }
  const {register, handleSubmit, formState: {errors }, reset } = useForm({ mode: 'onTouched', resolver: yupResolver(loginSchema)})
  
  const formSubmit = (data)=> {
  console.log(data)
  reset()
  }

  return (
    <div className='loginForm' style={{fontFamily: 'Roboto'}}>
      
      <Container>
        <Row className='d-flex' style={{justifyContent: 'space-around'}}>
        <Col md={6} sm= {12} className='m-auto mt-5 mb-5'>
          <div className="form">
            <h3 className="mt-3" style={{textAlign:'center'}} >Login to your ChowNow Account</h3>
            <form onSubmit={handleSubmit(formSubmit)}>

            <Col md={8} className='m-auto mt-3'>
            <label htmlFor="email">Email</label>
            <input type="email" 
            name='email'
            placeholder='Enter your email'
            className='form-control'
            {...register('email')}
           
            />
            <p>{errors.email?.message}</p>

            </Col>

            <Col md={8} className='m-auto mt-3 wrapper'>
            <label htmlFor="password">Password</label>
            <input type= {showPassword ? "text" : "password" }
            name='password'
            placeholder='Enter your password'
            className='form-control '
               {...register('password')}
               
             />
             < FaEye className='eye' onClick={togglePasswordLogic} />
             <p style={{}} className='mt-'>{errors.password?.message}</p>
             
            </Col>

            <Col md={8} className='m-auto mt-3'>
            <button className='form-control ' style={{backgroundColor:'red', borderColor:'red', color:'white'}}>Submit</button>
            </Col>

            </form>
          </div>
        
        </Col>
        </Row>
      </Container>

    </div>
  )
}

export default Lform
