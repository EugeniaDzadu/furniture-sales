import React , {useState} from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/Index'
import About from './pages/About'
import Blog from './pages/Blog'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Contact from './pages/Contact'
import Services from './pages/Services'
import Shop from './pages/Shop'
import Thankyou from './pages/Thankyou'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
        <Routes>
           <Route path='/' Component={Index}/>

           <Route path='/About' Component={About}/>

           <Route path='/Blog' Component={Blog}/>

           <Route path='/Cart' Component={Cart}/>
           

           <Route path='/Checkout' Component={Checkout}/>

           <Route path='/Contact' Component={Contact}/>

           <Route path='/Services' Component={Services}/>

           <Route path='/Shop' Component={Shop}/>

           <Route path='/Thankyou' Component={Thankyou}/>

        </Routes>
  </BrowserRouter>

)
