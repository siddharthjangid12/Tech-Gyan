import React from 'react'
import "./team.css"
 
const Team = () => {
  return (
    <div className="team_member">
    <h2>Our Teachers</h2>
        <div className="team">
            <article className="team_list">
              <img src="./images/teacher-1.jpg" alt="" className='team_teacher'/>
              <h4>Jack Dwayne</h4>
              <p>Web Developer Expert</p>
            </article>

            <article className="team_list">
              <img src="./images/teacher-6.jpg" alt="" className='team_teacher'/>
              <h4>Kylie lopaz</h4>
              <p>Graphic Designing Expert</p>
            </article>

            <article className="team_list">
              <img src="./images/teacher-7.jpg" alt="" className='team_teacher'/>
              <h4>Maria Lana</h4>
              <p>App Development Expert</p>
            </article>

            <article className="team_list">
              <img src="./images/teacher-8.jpg" alt="" className='team_teacher'/>
              <h4>Alia Luthara</h4>
              <p>Java Programming Expert</p>
            </article>
        </div>
    </div>
  )
}

export default Team