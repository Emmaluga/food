import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'
import data from './Data'
import Listings from './Listings'
// import { useProductsQuery } from '../features/Api/FoodApi'



//parent component
const Shopstore =  ()  => {

const [dataProducts, setData ] = useState([])
  const url = 'http://localhost:8080/products'

 
  const fetchfunc = async ()=> {
     try {
      const response = await fetch(url)
   
      if(!response.ok){
         throw new Error("network isuues pls wait ");  
      }
      const data = response.json()
       console.log(data)

      setData(data.dataProducts)
 

     } catch (error) {
      console.log('error', error)
     }
  }

  useEffect(()=> {
   fetchfunc() 

  }, [])

  


  return (
   
      <div className='Shopstore mt-5'>

      <Container>
      <Row>
      {/* <Col md={2} className='d-flex ' style={{flexDirection: 'column'}}>
      <button className='foodbtn mt-4' onClick={()=> setData(productdata)}>All</button>
         <button className='foodbtn mt-4'  onClick={()=> filtFunc("soup")}>Soup </button>
         <button className='foodbtn mt-4'  onClick={()=> filtFunc("continental")}>Continental</button>
  
       </Col> */}

      <Col md={10} className='big mt-3'>
          
       
          
           { dataProducts ? dataProducts.map((product)=> {
               return(
               <Listings key={product._id } {... product } />
             
               )
           }) : <p>no data </p>  }

          
            
          </Col>
      </Row>
     </Container>
      </div>
  )
}

export default Shopstore
