
import React from "react";
import { Routes, Route } from "react-router-dom"
import SharedLayout from "./componets/SharedLayout";
import AboutPage from "./pages/AboutPage";
import HomePage  from "./pages/HomePage";
import RegisterPage  from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPages";
import ContacPage from "./pages/ContactPage"
import ShopPage from './pages/ShoPage'
import Singlepage from "./componets/Singlepage";
import Cartpage from "./pages/Cartpage";

 
function App() {

  return (

    <div className="App">
{/* 
      <Navhead/> */}

      <Routes>


       <Route path="/" element = { <SharedLayout /> } >   
       <Route index element={ < HomePage /> } />
       <Route path="/about" element={ <AboutPage /> } />
       <Route path="/register" element={ <RegisterPage /> } />
       <Route path="/login" element={ <LoginPage /> } />
       <Route path="/shop" element={ <ShopPage /> } />
       <Route path="/shop/:ID" element={ <Singlepage /> } />
       <Route path="/cart" element={ <Cartpage /> } />
       <Route path="/contact" element={ <ContacPage /> } />

       </Route>

    
      </Routes>



      
      
    </div>

  );
}

export default App;
