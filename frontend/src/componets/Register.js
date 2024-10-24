import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

const Register = () => {
  return (
    <div className='newRegister'>

        <Container>
        <Row className='d-flex' style={{justifyContent: 'space-around'}}>
        <Col>
        <div className="register-wrapper">
            <h1 className='head-text ' style={{color:'white'}}>Register</h1>
        </div>
        </Col>
        </Row>  
        </Container>
      
    </div>
  )
}

export default Register
