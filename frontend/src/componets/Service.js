import React from 'react'
import {Container, Row, Col, Card, CardBody} from 'react-bootstrap'
import image1 from "../asset/cooking.jpg"
import image2 from "../asset/food pack1.jpg"
import image3 from "../asset/food delivery.jpg"

const Service = () => {
  return (
    <div className='service'>

        <Container>
        <Row>
        <div className="message mb-5 mt-5">
            <h3 className='text-center fonttext'>How we <span style={{color: 'green'}}>serve </span> you</h3>
        </div>

          <Col md={8} className='mx-auto text-center wrapper'>

          <Card className='new  'style={{  borderColor: 'transparent'}}>  
            <div className="image">
              <img src={image1} alt="" className='img' />

            </div>
            <CardBody>
             <div className="text">
             <h5>Deliciously cooked </h5>
             <p>we prepare our foods in a hygenic clean environment</p>
             </div>
            </CardBody>
            </Card>

            <Card className='new'style={{ borderColor: 'transparent'}}>  
            <div className="image">
              <img src={image2} alt="" className='img' />

            </div>
            <CardBody>
             <div className="text">
             <h5>Packaged with love </h5>
             <p>100% environment friendly packaging </p>
             </div>
            </CardBody>
            </Card>

            <Card className='new'style={{ borderColor: 'transparent'}}>  
            <div className="image">
              <img src={image3} alt="" className='img' />

            </div>
              <CardBody>
              <div className="text">
              <h5>Prompt delivery  </h5>
              <p>We dliliver ordered foods on time! </p>
              </div>
            </CardBody>
            </Card>











           {/* <div className="wrapper  " style={{alignItems:'center'}} >
            <div className="one mx-auto text-center ">
              <div className="img ">
              <img src={image1} alt="" className='packimg' />
              <h5>Deliciously cooked </h5>
              <p>we prepare our foods in a hygenic clean environment</p>
            
              </div>
              
            </div>

            <div className="two mx-auto text-center ">
            <div className="img ">
              <img src={image2} alt="" className='packimg' />
             <h5>Packaged with love </h5>
             <p>100% environment friendly packaging </p>
              </div>
             
              </div>


            <div className="three mx-auto ">
              <div className="img ">
              <img src={image3} alt="" className='packimg' />
              <h5>Prompt delivery  </h5>
              <p>We dliliver ordered foods on time! </p>
              </div>
             
           </div> */}




           {/* </div> */}

          </Col>







  
      




      
       
       
        </Row>
        </Container>
      
    </div>
  )
}

export default Service
