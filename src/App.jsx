import { useState } from 'react'

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home  from './Pages/Home'
import  Contact  from './Pages/Contact'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import About from './Pages/About'
import { Services } from './Pages/Services'
import { Booking } from './Pages/Booking'



function App() {
 

  return (
    <>
    <Navbar/>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home/> } />
        <Route path='/home' element= {<Home/> } />
        <Route path='/contact' element= {<Contact /> } />
        <Route path='/about' element= {<About/> }/>
        <Route path='/services' element= {<Services/> }/>
        <Route path='/booking' element = {<Booking/> }/>
      </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  )
}

export default App
