import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <div className='footer'>
        <Container >
        <Row >
       <Col lg={3} md={6} sm={12}>
        <div className="chownow">
        <h3 className='mb-4'>chownow</h3>
        <Link className='linkfooter'> home</Link> <br />
        <Link className='linkfooter'> aboutus</Link> <br />
        <Link className='linkfooter'> shop</Link>
        </div>
        </Col>

        <Col lg={3} md={6} sm={12} >
        <div className="resources">
        <h3 className='mb-4'>Resourses</h3>
        <Link className='linkfooter'>products information</Link> <br />
        <Link className='linkfooter'>consultations and catering services</Link> <br />
        <Link className='linkfooter'>SabiChops media</Link> <br />
        <Link className='linkfooter'>SabiChops food blogs</Link> 

        </div>
        </Col>

        <Col lg={3} md={6} sm={12}>
        <div className="contactusfooter">
        <h3 className='mb-4'>Contacts</h3>
          +234 9014055067 <br />
          +234 9014056000
        <Link className='linkfooter'> info@chownow.netlify.app</Link>
        <Link className='linkfooter'> custumercare@chownow.netlify.app</Link>
      </div> 
        </Col>


        <Col lg={3} md={6} sm={12}>
            <div className="newsletter">   
            <h3 className='mb-4'>Newsletter</h3>
    <p className=''>Recieve latest food delicacies and other informations in your mail daily at no cost by subscribing to our newsletter 
        </p> 
        
      

      <div className="form d-flex">

    <form> 
        <Col  sm={12} >

      <input type="email"
      placeholder='Enter your Email'  
      className='form-control'/>

        </Col>
        <Col sm={12}>
       
        <button className='form-control mt-2' style={{backgroundColor: "red", color: 'white', border: "red"}}>submit</button>
          
        </Col>
  </form>

      </div>
     
  
        
    </div>
        </Col >
        {/*  */}

        

        </Row>
        </Container>
      
    </div>
  )
}

export default Footer
