import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import logo1 from "../asset/picprofile.png"
import logo2 from "../asset/food man.jpg"
import logo3 from "../asset/food man2.jpg"


const Testimonials = () => {
  return (
    <div className='testimonials'>
        <Container>
        <Row className='mt-5 '>
            <div className="testi">
            <h1 className='text-center fonttext mb-5'>what our customers say</h1>
            </div>

        <Col sm={12} md={4} lg={4} className='mx-auto mb-4'>
        <div className="testi-img1 text-center mb-3">
        <img src={logo1} alt="" className='l1'  />
        </div>
        <div className="heading text-center mb-3">
         <h3> Adele williams</h3>
        </div>
        <div className="textitext text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam illo voluptas id dolor officia magni nesciunt quaerat expedita suscipit cum.

        </div>
        </Col>

        <Col sm={12} md={4} lg={4} className='mx-auto mb-4'>
        <div className="texti-img2 text-center mb-3">
        <img src={logo2} alt="" className='l1' />
       </div>

       <div className='text-center heading mb-3'>
        <h2>max Roberts</h2>
       </div>

         <div className='text-center mb-3'>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, id!</p>
       </div>

        </Col>


        <Col sm={12} md={4} lg={4} className='mx-auto mb-4'>
        <div className="texti-img3 text-center mb-3">
        <img src={logo3} alt="" className='l1' />
       </div>

       <div className='text-center heading mb-3'>
        <h2>Ruun shurts</h2>
       </div>

         <div className='mb-3'>
       <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, id!</p>
       </div>
        </Col>
        </Row>
        </Container>
      
    </div>
  )
}

export default Testimonials
