import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const Shop = () => {

  return (
    <div className='shop'>
    <Container>
    <Row className='d-flex' style={{justifyContent: 'space-around'}}>
    <Col  sm={12} className=''>
      <div className=" shop-text ">
       <h1 className='head-text' > Shop </h1>
     
    
      </div>

  </Col>

  

    </Row>
   </Container>

    </div>
  )
}

export default Shop
