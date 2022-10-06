import React from 'react'
import { NavLink } from "react-router-dom";
import "./navbar.css"

const Navbar = () => {
  return (
     <nav>
      <div className="menu_list">
        <ul className="nav_list">
          <li>
            <NavLink className="nav_icon" to ="/">Home</NavLink>
          </li>
          <li>
            <NavLink className="nav_icon" to ="/courses">Courses</NavLink>
          </li>
          <li>
            <NavLink className="nav_icon" to ="/about">About</NavLink>
          </li>
          <li>
            <NavLink className="nav_icon" to ="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
     </nav>
  )
}

export default Navbar