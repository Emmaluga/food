import React from 'react'
import {Container,Row,Col} from 'react-bootstrap'

const Login = () => {
  return (
    <div className='Login'>
      <Container>
        <Row>
        <Col sm={12} >
          
          <div className="login-wrapper mb-5" style={{}}>
            <h3 className='head-text' style={{color:'white'}}>Login</h3>
          </div>
        </Col>
        </Row>
      </Container>
    
    </div>
  )
}

export default Login
