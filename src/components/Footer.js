import React from 'react'
import "./footer.css"
import {NavLink} from "react-router-dom"

const Footer = () => {
  return (
   <header className='footer'>
    <div className="main_footer">
      <div className="footer_left">
        <h3>Links</h3>
        <ul className="footer_list">
        <li>
          <NavLink className="footer_icon" to ="/">Home</NavLink>
          </li>
          <li>
          <NavLink className="footer_icon" to ="/courses">Courses</NavLink>
          </li>
          <li>
          <NavLink className="footer_icon" to ="/about">About</NavLink>
          </li>
          <li>
          <NavLink className="footer_icon" to ="/contact">Contact</NavLink>
          </li>
          </ul>
      </div>

      <div className="footer_center">
         <h3>Useful Links</h3>
         <ul className="footer_list_2">
         <li>Privacy Policy</li>
         <li>Terms & Condition</li>
         <li>Refund Policy</li>
         </ul>
      </div>

      <div className="footer_right">
        <h3>feel free to contact us</h3>
        <form action="#" className='form_input'>
          <input type="email" name="email" id="email" placeholder='E-mail' className='footer_input' />
          <input type="password" name="password" id="password" placeholder='Password' className='footer_input' />
          <textarea name="text-area" id="text-area" cols="30" rows="10" className='footer_text'></textarea>
        </form>
        <NavLink className="footer_button" to ='/'>submit now</NavLink>
      </div>
     <div className="footer_end">
        <h3>follow us</h3>
        <span>
        <i class="fa-brands fa-linkedin"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        </span>
     </div>

    </div>
   </header>
  )
}

export default Footer