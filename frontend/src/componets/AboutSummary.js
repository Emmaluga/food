import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import logo1 from "../asset/Jollof-rice.jpg"


const AboutSummary = () => {
  return (

    <div className='abtsummry'>
       <Container>
        <Row className='mt-5'>
        <Col sm={12} md={6} lg={6} className='mx-auto px-5 bg-'>
        <div className="p- " style={{background: ""}}>
        <h3 className='text-center fonttext mb-3' >what is diffrent about Cravv</h3>

        <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel 
          aspernatur veritatis 
          sunt eos veniam ex saepe aliquid natus facilis corporis.</p>
          <div className="IMG text-center mb-3">
            <img src={logo1} alt="" height={220} className=''/>
     
          </div>
       
        </div>
        
       
        </Col>

        <Col sm={12} md={6} lg={6} className='mx-auto px-5 bg-'>
        
        <div className="p- m- " style={{background: ""}}>
          <div className='d-flex '> 
          <div className='agenda'>
          1
         </div>
         <div className='fonttext'>
          <h4>Fast Delivery Service</h4>
         </div>
         
        </div>
        {/*  */}
        
        <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel 
          aspernatur veritatis 
          sunt eos veniam ex saepe aliquid natus facilis corporis.</p>
          
          {/*  */}
          
           <div className='d-flex '> 
          <div className='agenda'>
          2
         </div>
         <div className='fonttext'>
          <h4>Real time food ordered tracking</h4>
         </div>
         
        </div>
        <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel 
          aspernatur veritatis 
          sunt eos veniam ex saepe aliquid natus facilis corporis.</p> 
         
         {/*  */}
         <div className='d-flex '> 
          <div className='agenda'>
          3
         </div>
         <div className='fonttext'>
          <h4>Real time food ordered tracking</h4>
         </div>
         
        </div>
        <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel 
          aspernatur veritatis 
          sunt eos veniam ex saepe aliquid natus facilis corporis.</p> 
         

         
         </div> 
         
         
         {/*  */}

        
       
        
        
       
        </Col>


        </Row>
       </Container>
    </div>
  )
}

export default AboutSummary
