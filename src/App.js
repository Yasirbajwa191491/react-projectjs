import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import About from "./components/About"
import Contact from "./components/Contact"
import Portfolio from "./components/Portfolio"
import Error from "./components/Error"
import Footer from './components/Footer'
const App = () => {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='Portfolio' element={<Portfolio />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App