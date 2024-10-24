import React from 'react'
import { Container, Row, Col, CardBody, Card } from 'react-bootstrap'
import {  Link } from 'react-router-dom'
import { TiArrowRight } from "react-icons/ti";

const Dlisting = (product) => {

    const {id, image, title,price } = product
  return (
    <div className='displaylisting'>

    <Container>
     <Row>
     <Col md={4} id = {id} >

         

        <div className="one" > 
          <Card className='new'style={{width: '200px', borderColor: 'transparent'}}>  

          <div className="image">

          <Link to={ `/shop/${product._id}` }> <img src={image} alt="" className='img'  /> </Link>
          </div>
          <CardBody> 
          <div className="title">
            <h6 className=''>{title}</h6>
          </div>
          <div className="learnMore text-center d-flex " style={{justifyContent: 'space-between'}}>
            <span className='' style={{color: 'green'}}>{price}</span>
        
           <Link to={'/shop'}>  <p style={{color:'red'}}>learn more <TiArrowRight /></p>  </Link>
     
          </div>
          </CardBody>
          </Card>
     
      </div>

     </Col>
     </Row>
     </Container>
    
  
</div>

  )
}

export default Dlisting
