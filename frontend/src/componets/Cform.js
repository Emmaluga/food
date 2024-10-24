import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {useForm} from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const contactSchema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    message: yup.string().required()
})

const Cform = () => {

  const { register, handleSubmit, formState: {errors} , reset} = useForm({resolver: yupResolver(contactSchema)})

  const formSubmit = (data)=> {
    console.log(data)
    reset()

  }

  return (
    <div className='cForm'>
      <Container>
        <Row className='d-flex ' style={{justifyContent: 'space-around'}}>
          <Col md={6} sm={12} className='m-auto mt-5 mb-5'>
          <div className="form">
          <h3 className='mb-5' style={{textAlign: 'center', color:'white'}}> Send us a message </h3>
           <form  onSubmit={handleSubmit(formSubmit)}>
           <Col md={8} className='mt-3 m-auto'>
            <label htmlFor="firstName">FirstName</label>
            <input type="text"
            name='FirstName'
            placeholder='Pls enter your firstname'
            className='form-control'
            {...register('firstName')}
            />

            <p >{errors.firstName?.message}</p>

           </Col>

           <Col md={8} className='mt-3  m-auto' style={{color:'white'}}>
            <label htmlFor="lastName">LastName</label>
            <input type="text"
            name='LastName'
            placeholder='Pls enter your lastname'
               className='form-control'
               {...register('lastName')}
             />
             <p>{errors.lastName?.message}</p>
           </Col>

           <Col md={8} className='mt-3 m-auto'>
            <label htmlFor="message">message</label>
               <textarea name="message" id="" cols="30" rows="10" className='form-control' {...register('message')}>
               </textarea>
             <p>{errors.message?.message}</p>
           </Col>

           <Col md={8} className='mt-3 m-auto'>
            <button className='form-control' 
            style={{backgroundColor:'red', borderColor:'red',color:'white'}}
            > Submit </button>
           </Col>
           </form>
           
          </div>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
}

export default Cform
