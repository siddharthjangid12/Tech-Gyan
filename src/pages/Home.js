import React from 'react'
import "./home.css"
import { NavLink } from "react-router-dom"
import Course from './Course'


const Home = () => {
  return (
   <header className='header_container'>
    <div className="container">
      <div className="container_left">
      <h3> Technology is giving the world a better future</h3>
      <p>technology is part of our lives and it is easily at our reach to do almost anything. It makes our work easier and faster. Technology has many uses, from entertainment to Education. Students should learn how to be productive and independent learners, to develop their learning skills and solve problems.</p>

      <NavLink className="btn_class" to ="/Courses">Get Started</NavLink>
      </div>

      <div className="container_right">
        <img src="./images/header.png" alt="" className='header_image'/>
    </div>
      
    </div>

    <Course />
    
  
   </header>
  )
}

export default Home