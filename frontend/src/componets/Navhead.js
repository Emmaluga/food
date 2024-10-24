import React, { useState } from 'react'
import {} from "react-icons/io5";
import {Container, Nav, Navbar} from "react-bootstrap"
import { NavLink } from "react-router-dom"



const Navhead = () => {
  const [ navColors, setNavColors] = useState(true)


  const headFunc = ()=> {
     if(window.scrollY > 100 ){
      setNavColors(false)
   
     }else{
      setNavColors(true)
     
     }
  }

  window.addEventListener("scroll", headFunc )

  

  return (
    
   


<Navbar expand="lg" className= {navColors ? "fixed-top" : "fixed-top newnavcolor "}>
      <Container>
        <Navbar.Brand href="#home" style={{fontFamily:" Roboto",color: 'white', fontSize: "2rem", fontWeight: "bolder "}} >
          Cra<span style={{color: 'red'}}>v</span>v</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  />
        <Navbar.Collapse >
          <Nav className="ms-auto">

        <NavLink to={"/"} className={ ' navlinks '}>Home</NavLink>
        <NavLink to={"/about"} className={'navlinks'}>About</NavLink>
        <NavLink to={"/shop"} className={'navlinks'}>Shop</NavLink>
       
          </Nav>

         
          <Nav className="ms-auto">

        <NavLink to={"/register"} className={'navlinks'}>Register</NavLink>
        <NavLink to={"/login"} className={'navlinks'}>Login</NavLink>
        <NavLink to={"/contact"} className={'navlinks'}>Contact</NavLink>
        <NavLink to={"/cart"} className={'navlinks'}>0</NavLink>
        
          </Nav>



        </Navbar.Collapse>
      </Container>
    </Navbar>
      


  )
}

export default Navhead
