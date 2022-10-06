import React from 'react'
import "./courses.css"
import {NavLink} from "react-router-dom"


const Courses = () => {
  return (
    <div className="courses">
      <h3>our courses</h3>
 
      <div className="courses_list">
          <article className='courses_name'>
             <img src="./images/course-p-5.jpg" alt="" className='courses_image'/>
             <h4>Cyber-Security Course</h4>
             <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
             <p>Cyber security is the practice of defending computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks. It's also known as information technology security or electronic information security. The term applies in a variety of contexts, from business to mobile computing, and can be divided into a few common categories</p>
             <NavLink className="btn_courses" to ="/courses">Learn More</NavLink>
          </article>

          <article className='courses_name'>
             <img src="./images/course-p-6.jpg" alt="" className='courses_image'/>
             <h4>C Programming Course</h4>
             <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
             <p>C is a general-purpose programming language that is extremely popular, simple, and flexible to use. It is a structured programming language that is machine-independent and extensively used to write various applications, Operating Systems like Windows, and many other complex programs like Oracle database, Git, Python interpreter, and more</p>
             <NavLink className="btn_courses" to ="/courses">Learn More</NavLink>
          </article>

          <article className='courses_name'>
             <img src="./images/course-p-7.jpg" alt="" className='courses_image'/>
             <h4>Ethical Hacking Course</h4>
             <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
             <p>When we look at the news, there are frequent occurrences of cyber security threats, data leaks, money theft, digital attacks, and cyber espionage. All of this is enabled by the fact that people with malicious intent can now orchestrate these activities in the comfort of their homes, from behind a computer screen. With the widespread access to the Internet across the world, this convenience incentivizes an exponentially greater number of hackers to attempt cyber crimes</p>
             <NavLink className="btn_courses" to ="/courses">Learn More</NavLink>
          </article>

          <article className='courses_name'>
             <img src="./images/course-p-8.jpg" alt="" className='courses_image'/>
             <h4>Ethical Hacking Course-02</h4>
             <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
             <p>When we look at the news, there are frequent occurrences of cyber security threats, data leaks, money theft, digital attacks, and cyber espionage. All of this is enabled by the fact that people with malicious intent can now orchestrate these activities in the comfort of their homes, from behind a computer screen. With the widespread access to the Internet across the world, this convenience incentivizes an exponentially greater number of hackers to attempt cyber crimes</p>
             <NavLink className="btn_courses" to ="/courses">Learn More</NavLink>
          </article>

          <article className='courses_name'>
             <img src="./images/course-p-9.jpg" alt="" className='courses_image'/>
             <h4>HTML,CSS Course</h4>
             <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
             <p>HTML the Hypertext Markup Language and CSS Cascading Style Sheets are two of the core technologies for building Web pages. HTML provides the structure of the page, CSS the visual and aural layout, for a variety of devices</p>
             <NavLink className="btn_courses" to ="/courses">Learn More</NavLink>
          </article>

          <article className='courses_name'>
             <img src="./images/course-p-10.jpg" alt="" className='courses_image'/>
             <h4>Python Programming Course</h4>
             <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
             <p>Python (programming language) Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected</p>
             <NavLink className="btn_courses" to ="/courses">Learn More</NavLink>
          </article>

          <article className='courses_name'>
             <img src="./images/course-p-4.jpg" alt="" className='courses_image'/>
             <h4>Java Programming Course</h4>
             <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
             <p>Java is a computer programming language. It enables programmers to write computer instructions using English-based commands instead of having to write in numeric codes. It is known as a high-level language because it can be read and written easily by humans</p>
             <NavLink className="btn_courses" to ="/courses">Learn More</NavLink>
          </article>

          <article className='courses_name'>
             <img src="./images/course-p-3.jpg" alt="" className='courses_image'/>
             <h4>Web Designing Course</h4>
             <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
             <p>Web design is the process of creating websites. It encompasses several different aspects, including webpage layout, content production, and graphic design. While the terms web design and web development are often used interchangeably, web design is technically a subset of the broader category of web development</p>
             <NavLink className="btn_courses" to ="/courses">Learn More</NavLink>
          </article>

          <article className='courses_name'>
             <img src="./images/course-p-2.jpg" alt="" className='courses_image'/>
             <h4>App Development Course</h4>
             <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
             <p>App development is the process of building applications for use on various operating systems through the use of one or more programming languages. App development is principally completed by teams of software engineers, with input from project managers, data scientists, designers, writers and additional personnel on the content that goes into the app</p>
             <NavLink className="btn_courses" to ="/courses">Learn More</NavLink>
          </article>

          <article className='courses_name'>
             <img src="./images/course-p-1.jpg" alt="" className='courses_image'/>
             <h4>Web Development Course</h4>
             <span>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                </span>
             <p>Web development is also known as website development, while the professionals that maintain a website are called web developers or (more commonly) web devs. Web development is the coding or programming that enables website functionality, per the owner's requirements.</p>
             <NavLink className="btn_courses" to ="/courses">Learn More</NavLink>
          </article>
        </div>
      </div>
  
  )
}

export default Courses