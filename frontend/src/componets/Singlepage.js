import React from 'react'
import { Container, Row, Col} from 'react-bootstrap'
import productdata from './Data'
import { useParams, Link } from 'react-router-dom'
import  { FaRegStar, FaCheck } from "react-icons/fa";



const Singlepage = () => {
  const { ID } = useParams()
  const product = productdata.find((items)=> items.id === ID )
  const {image, title, id , price, description , category } = product
  return (
    <div className='singlepage '>
   

      <Container>
      <Row className=''>
      <div className="mb-3" style={{}}>
      <Link to={"/shop"} className='linkback ' style={{color:'green'}}>Back to shop</Link>
      </div>
      <Col className='' md={6} id={id}>
        <div><img src={image} alt={image} width={'300px'} /></div>
      </Col>


      <Col className='' md={6}>
      <div className="single-text ">
      <h2>{title}</h2>
      <span className='mx-1' style={{color: "red" }}><FaRegStar /></span> 
          <span className='mx-1' style={{color:  "red"}}><FaRegStar /></span> 
          <span className='mx-1' style={{color:  "red" }}><FaRegStar /></span> 
          <span className='mx-1' style={{color:  "red" }}><FaRegStar /></span> 
          <span className='mx-1' style={{color:  "red" }}><FaRegStar /></span>  <br />

     <div className="span-info d-flex" >
     <span style={{color: 'green', fontSize: "20px"}}>{category}</span>
     </div>
      <p>{description}</p>
         <div className="tags ">

            <div className="tags-0ne">
          <span className='mx-3' style={{color: ''}}><FaCheck /> </span> 
          <span style={{color: 'green'}}>Fast delivery</span>

            </div>

            <div className="tags-two">

          <span className='mx-3'><FaCheck /> </span> 
          <span style={{color: 'green'}} >Freshly made and deliverd! <span style={{color: 'red'}}>No second day cooked</span></span>
            </div>

            <div className="tags-three">

            <span className='mx-3'><FaCheck /> </span> 
           <span style={{color: 'green'}} >Free shipping available</span>
             </div>

         </div>

         <div className="shipping mt-2 mb-">
    
     

            
         </div>

      <span style={{color: "red", fontSize: '20px'}}>{price}</span>
      <div className="butt mt-2"  >
       <button className='mx-3 butt-cart px-3'  >Buy now</button>
        <button className='butt-cart px-3'>Add to cart</button>
      </div>
    </div>
      </Col>


      </Row>
      </Container>
      
    </div>
  )
}

export default Singlepage
