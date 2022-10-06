import React from 'react'
import "./course.css"
import { NavLink } from "react-router-dom"

const Course = () => {
  return (
    <header>
      <h2>Our Popular Courses</h2>
      <div className="main_course">
      <article className='course_list'>
             <img src="./images/course-p-1.jpg" alt="" className='popular_course_image'/>
             <h2>Web Development Course</h2>
             <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
             <p>Web development is also known as website development, while the professionals that maintain a website are called web developers or (more commonly) web devs. Web development is the coding or programming that enables website functionality, per the owner's requirements.</p>
             <NavLink className="btn_class_" to ="/courses">Learn More</NavLink>
          </article>

          <article className='course_list'>
             <img src="./images/course-p-2.jpg" alt="" className='popular_course_image'/>
             <h2>App Development Course</h2>
             <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
             <p>App development is the process of building applications for use on various operating systems through the use of one or more programming languages. App development is principally completed by teams of software engineers, with input from project managers, data scientists, designers, writers and additional personnel on the content that goes into the app</p>
             <NavLink className="btn_class_" to ="/courses">Learn More</NavLink>
          </article>

          <article className='course_list'>
             <img src="./images/course-p-3.jpg" alt="" className='popular_course_image'/>
             <h2>Web Designing Course</h2>
             <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
             <p>Web design is the process of creating websites. It encompasses several different aspects, including webpage layout, content production, and graphic design. While the terms web design and web development are often used interchangeably, web design is technically a subset of the broader category of web development</p>
             <NavLink className="btn_class_" to ="/courses">Learn More</NavLink>
          </article>

          <article className='course_list'>
             <img src="./images/course-p-4.jpg" alt="" className='popular_course_image'/>
             <h2>Java Programming Course</h2>
             <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
             <p>Java is a computer programming language. It enables programmers to write computer instructions using English-based commands instead of having to write in numeric codes. It is known as a high-level language because it can be read and written easily by humans</p>
             
             <NavLink className="btn_class_" to ="/courses">Learn More</NavLink>

          </article>
      </div>
            
    </header>
  )
}

export default Course