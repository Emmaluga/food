import {Container, Row, Col} from 'react-bootstrap'


const Contact = ()=> {

    return(
       
       <div className="contact">
           
        <Container >
        <Row >
        <Col sm={12}>
         <div className="contact-wrapper">
         <h1 className='head-text' style={{fontFamily:'Roboto', color:'white '}}>Contact Us</h1>
         </div>
        </Col>
        </Row>
        </Container>

       </div>

    )
}

export default Contact