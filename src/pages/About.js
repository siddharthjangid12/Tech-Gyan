import React from 'react'
import "./about.css"
import Team from './Team'

const About = () => {
  return (
    <div className="about">
      <div className="about_container">

        <div className="left_about">
           <h2>our achievements</h2>
           <p>Achievements are things you did that had a lasting impact for your company or client. It is a result that you personally bring about while fulfilling a particular role. Typically they are things that you created, built, designed, sold or initiated.</p>

           <div className="about_2">
            <div className="about_icon">
           <article className='about_achievement'>
           <span><i class="fa-solid fa-video"></i></span>
            <h3>+600</h3>
            <h3>Courses</h3>
           </article>

           <article className='about_achievement'>
           <span><i class="fa-solid fa-people-group"></i></span>
            <h3>+30,000</h3>
            <h3>Students</h3>
           </article>

          <article className='about_achievement'>
           <span><i class="fa-solid fa-trophy"></i></span>
            <h3>+30</h3>
            <h3>Awards</h3>
           </article>
           </div>

        </div>
      </div> 
       <Team />
        
      </div>
    </div>
  )
}

export default About