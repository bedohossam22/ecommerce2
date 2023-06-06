import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import App from "./App";
import Shop from "./Second Page/Shop"
import Myaccount from './Myaccount';
import Forms from './Forms';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
   
    <Routes>
      <Route path='/ecommerce2' element={<App/>} />
      <Route path="/shop" element={<Shop/>} />
      <Route path='/myaccount' element= {<Myaccount/>} />
      <Route path='/forms' element= {<Forms/>} />
    </Routes>
    </BrowserRouter>
 
);