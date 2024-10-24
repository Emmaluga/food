import React from 'react'
import { Container, Col, Row, Card, CardBody, } from 'react-bootstrap' 
import { Link } from 'react-router-dom' 
// import logo1 from "../asset/f"
// import logo1 from "../asset/food.png"

const Listings = (products) => {
    const {   image, heading, price, _id  } = products

  return (

    <div className='listings mt-3 mb-3'>
        <Container>
         <Row>
         <Col md={4} id = { _id}>
         <div className="card mx-auto" style={{width: '250px'}}>
         
             <Card>
            <div className='image mx-auto '>
           <Link to={ `/shop/${products._id}` }> <img src={image} alt="" className='img-fluid' style={{width: '300px'}} /> </Link>
           <CardBody>
            <div className='title'>
              <h5>{heading}</h5>
            </div>
            <div className='price'>
              <span>{price}</span>
            </div>

            <div className=' mx-auto' >
            <button className='mx-auto cartbutton'  >Add to cart</button>
             </div>

           </CardBody>
            </div>
          </Card>    
         </div>
         </Col>
         </Row>
        </Container>
      
    </div>
  )
}

export default Listings
