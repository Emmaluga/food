import React from 'react'
import {Container, Row, Col, Card, CardBody } from 'react-bootstrap'
import image1 from '../asset/food offer2.jpg'
import image2 from '../asset/food discount2.jpg'
import image3 from '../asset/food discount3.jpg'


const Offers = () => {

  return (
    <div className='offers'>

        <Container>
        <Row className='mt-5'>
        <div className="testi mt-5 ">
            <h3 className=' fonttexts '>Some of our <span style={{color: 'green' }}>best disscount offers </span> </h3>
            </div>
        <Col md={8} className="mt-5  mx-auto " >
           <div className="wrapperbox ">

        <Card className='images'style={{  borderColor: 'transparent', width:'300px', height: '383px'}}>  
            <div className="">
              <img src={image1} alt="" className='' style={{width: '300px', height: '383px'}} />

            </div>
        
            </Card>
            <div className="innercontainer mx-3">

        <Card className=''style={{  borderColor: 'transparent', width:'200px', height: ''}}>  
            <div className="image mb-3">
              <img src={image2} alt="" className='imgs'  />

            </div>
        
            </Card>
        <Card className=''style={{  borderColor: 'transparent', width:'200px', height: ''}}>  
            <div className="image">
              <img src={image3} alt="" className='imgs'  />

            </div>
        
            </Card>
            </div>

           </div>








         {/* <div className="wrapperbox  d-flex">
            <div className="onenox mx-1 " >
              
               <img src={image1} alt="" className='' style={{width: '300px', height: '383px'}} />
            </div>
            <div className="outer mx-1  ">
                <div className="inner1 mb-3 " style={{width: '200px', backgroundColor: 'lightgrey'}}>
                 <div className="imgs">
                 <img src={image2} alt=""  className=''/>
                 </div>
                 <div className="text">
              
                 </div>
                </div>
                <div className="inner2 "  style={{width: '200px', backgroundColor: 'lightgray'}}>
                <div className="imgs">
                 <img src={image3} alt=""  className=''/>
                 </div>
                 <div className="text">
            
                 </div>
                </div>

            </div>
        </div>  */}

        </Col>
        </Row>
       </Container>
    </div>
  )
}

export default Offers
