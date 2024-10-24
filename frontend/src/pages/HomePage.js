import React from 'react'
import Hero from '../componets/Hero'
import AboutSummary from '../componets/AboutSummary'
import Testimonials from '../componets/Testimonials'
import  DisplayProducts from '../componets/DisplayProducts'
import Service from '../componets/Service'
import Offers from '../componets/Offers'


const HomePage = () => {

  return (

    <div>
    
    <Hero />
    {/* <AboutSummary/> */}
    <Service/>
    <DisplayProducts/>
    <Offers/>
    <Testimonials/>
 
    

    </div>
  )
  
}

export default HomePage
