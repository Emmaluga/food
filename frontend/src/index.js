import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom"
import {centralstore} from './features/Store/centralstore'
import { Provider } from 'react-redux'


 import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <BrowserRouter>
        
    <Provider store={centralstore}>  
       <App />
     </Provider> 
   
  

    </BrowserRouter>

);

