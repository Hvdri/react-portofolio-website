import React from 'react'
import './About.css'
import ME from '../../assets/me.png'
import { FaAward } from 'react-icons/fa'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About me</h2>

      <div className='about_container'>
          <div className='img-container'>
          <img src={ME} className='img' alt="about-image" />
          </div>

          <div className='container_text'>
            
            <p>I am 20 years old, a second year student.<br></br> <br></br>
            I like to learn new things and I want to be part of a community of people that can teach me how to improve.<br></br> <br></br>
            For now, I'm just starting out, but I'm planning to grow professionally and become an effective employee. <br></br><br></br>
            I like teamwork and I will not hesitate to share my ideas or ambiguities that I have.
            </p>
      
          </div>
        
      </div>

    </section>
  )
}

export default About