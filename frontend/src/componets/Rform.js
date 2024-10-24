import React from 'react'
import {Container, Row, Col}  from "react-bootstrap"
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from  'yup'


const registerSchema = yup.object().shape({

     firstName: yup.string().required(),

     lastName: yup.string().required(),

     email: yup.string().email().required(),

     password: yup.string().required()
     .min(10)
     .matches(RegExp('(.*[a-z].*)'), 'lowerCase')
     .matches(RegExp('(.*[A-Z].*)'), 'Uppercase')
     .matches(RegExp('(.*\\d.*)'), 'Number')
     .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), 'Special'),

     cpassword: yup.string().required('pls confirm your password')
     .min(10)
     .matches(RegExp('(.*[a-z].*)'), 'lowerCase')
     .matches(RegExp('(.*[A-Z].*)'), 'Uppercase')
     .matches(RegExp('(.*\\d.*)'), 'Number')
     .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), 'Special')
     .oneOf([yup.ref('password')], 'password does not match')

    })

const Rform = () => {

  const { register, handleSubmit, formState: {errors}, reset } = useForm({ mode: 'onTouched', resolver: yupResolver(registerSchema)})

   const formSubmit = (data)=> {
      console.log(data)
      reset()
   }

  return (
    <div className='rform' style={{fontFamily: 'Roboto'}} >
       
       <Container>
        <Row className='d-flex' style={{justifyContent: 'space-around'}} >
         <Col sm={12} md={6} className='m-auto mt-5 mb-5'>
         <div className="form">
            <h3 className='mb-5 m-auto' style={{textAlign:'center', color:'white'}}>Open your Chownow Account </h3>
             <form onSubmit={handleSubmit(formSubmit) }>
              <Col md={8} className='m-auto'>
              <label htmlFor="firstName">FirstName</label>
              <input type="text" 
              name='firstName'
              placeholder='Enter your firstName'
               className='form-control'
               {...register('firstName')   }
              />
              <p>{errors.firstName?.message}</p>
              </Col>

              <Col md={8} className='m-auto mt-3'>
              <label htmlFor="lastName">LastName</label>
              <input type="text"
              name="lastName" 
              placeholder='Enter your lastName'
               className='form-control'
               {...register('lastName')}
              />
              <p>{errors.lastName?.message}</p>
              </Col>

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

              <Col md={8} className='m-auto mt-3'>
               <label htmlFor="password">Password</label>
               <input type="password"
               name='password' 
               placeholder='Enter your password' 
               className='form-control'
                {...register('password')}
               />
               <p>{errors.password?.message}</p>

              </Col>

              <Col md={8} className='m-auto mt-3'>
               <label htmlFor="password">confirm Password</label>
               <input type="password"
               name='password' 
               placeholder='Re-confirm your password' 
               className='form-control'
               {...register('cpassword')}
               />
               <p>{errors.cpassword?.message}</p>

                  </Col>

              <Col md={8} className='mt-3 m-auto'>
          <button className=' form-control mt-3' style={{color:'white', backgroundColor:'red', borderColor:'red'}}  >Submit</button>
              </Col>
             </form>
         </div>
         </Col>
        </Row>
       </Container>

    </div>
  )
}

export default Rform
