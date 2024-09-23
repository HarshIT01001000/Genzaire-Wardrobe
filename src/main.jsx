import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App.jsx';
import Layout from './Layout.jsx';
import './index.css';
import About from './Components/Pages/About.jsx';
import Oldstock from './Components/Pages/Oldstock.jsx';
import PageBuyCart from './Components/PagesReusable/PageBuyCart.jsx';
import OrderPage from './Components/Pages/OrderPage.jsx';

ReactDOM.createRoot
(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='' element={<App />} />
          <Route path='/About' element={<About/>}></Route>
          <Route path='/Oldstock' element={<Oldstock/>}></Route>
          <Route path='/BuyNow' element={<PageBuyCart/>}></Route>
          <Route path='/Form' element={<OrderPage/>}></Route>
        </Route>
        
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
