import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import About from "../components/About"
import Contact from '../components/Contact'
import AboutDetails from '../components/AboutDetails'

const Mainroutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element = {<Home />} />
            <Route path='/about' element = {<About />} />
            <Route path='/about/:id' element = {<AboutDetails />} />
            <Route path='/contact' element = {<Contact />} />
        </Routes>
    </div>
  )
}

export default Mainroutes