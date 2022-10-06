import React from 'react'
import {BrowserRouter , Routes , Route} from "react-router-dom"
import Header from './components/Header'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'
import Courses from './pages/Courses'
import Home from './pages/Home'

const App = () => {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    <Route path = "/" element ={<Home />} />
    <Route path = "/courses" element ={<Courses />} />
    <Route path = "/about" element ={<About />} />
    <Route path = "/contact" element ={<Contact />} />
   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App