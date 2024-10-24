import React, { useEffect, useState } from 'react'
import {Container, Col, Row} from 'react-bootstrap'
import Listings from '../componets/Listings'
import Dlisting from './Dlisting'
import displayData from './data2'


const DisplayProducts = () => {
  // const {_id, image } = production
 const [data, setData] = useState([])
const url = 'http://localhost:8080/products'

const datafunc = async ()=> {

  try {
    
    const response = await fetch(url)
    if(!response.ok){
        throw new Error('bad network pls wait ')
    }
    const fetchData = response.json()
    setData ( data.fetchData )
    console.log(fetchData)

  } catch (error) {
    console.log('error', error)
  }
}

useEffect(()=> {
   datafunc()
}, [])


  return (

    <div className=''>
       <Container>
        <Row className='mt-5'>
        <div className="testi mt-5 ">
            <h3 className=' fonttext  mx-5'>Some of our <span style={{color: 'green'}}>delicacies </span> </h3>
            </div>
        <Col md={8} className="big mx-auto mt-5 " >
      
          { data ? data.map((item)=> {

            return(

         
  
           <Dlisting key={item.id}  {...item }/>
         
     
            )

        

          }): <p>no data </p> }

        </Col>
        </Row>
       </Container>
      
    </div>
  )
}

export default DisplayProducts
