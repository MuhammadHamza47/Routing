import React from 'react'
import Menu from './Menu/Menu'
import About from './About/About'
import HeroSection from './LandingPage/HeroSection'
import Contact from './Contact/Contact'
import {Routes, Route} from 'react-router-dom';

function Routings() {
  return (
    <>
        <Routes>
            <Route path='/'>
                <Route index element={<HeroSection/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/menue' element={<Menu/>}/>
                <Route path='/about' element={<About/>}/>
                
            </Route>
        </Routes>
    </>
  )
}

export default Routings
