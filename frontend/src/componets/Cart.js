import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Cart = () => {
    return (
        <div className='cart'>
    
    <Container>
              <Row className='d-flex' style={{justifyContent: 'space-around'}}>
              <Col  sm={12} className=''>
                <div className=" cart-text ">
                 <h1 className='head-text' > Cart </h1>
               
              
                </div>
    
            </Col>
    
    
              </Row>
             </Container>
          
        </div>
      )
}

export default Cart
