import { Container, Row, Col } from 'react-bootstrap'


const Hero = ()=> {

    return(



      <div className="hero">

         <Container>
          <Row>
          <Col sm={12}>

           <div className="hero-text">
             <h1 className='head-text'>  Healthy food served <span style={{color:"red"}}>hot!</span>  </h1>

           {/* <div className="hero-button"> */}
            {/* <button ></button> */}
            <a href="/order" className='hero-button'>Order now</a>
{/*          
           </div> */}

           </div>


       
           

          </Col>
          </Row>

         </Container>

      </div>


    )
}

export default Hero