import React from 'react'
import {Outlet} from 'react-router-dom'
import Navhead from './Navhead'
import Footer from './Footer'

const SharedLayout = () => {

  return (

    <div>

    <Navhead />

     <Outlet/>

     <Footer/>



      
    </div>
  )

}

export default SharedLayout
