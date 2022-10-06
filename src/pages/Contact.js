import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div className="contact_page">
      <div className="contact">
        <div className="left_contact">
          <img src="./images/contact.png" alt="" className='contact_image' />
        </div>
        <div className="right_contact">
          <article className="right_about">
            <h4>feel free to contact us</h4>
            <h5>Phone No.- 12345-67890</h5>
            <h5>Whatsapp No.- +91-9876543210</h5>
            </article>

            <article className="right_about">
            <h3>Our Address</h3>
            <p>Near of bank of baroda,andheri west, mumbai, maharastra,Pin code: 400001</p>
            </article>
        </div>
      </div>
    </div>
  )
}

export default Contact