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

          <img src={ME} className='img' alt="about-image" />

          <div className='container_text'>
            
            <p>lorem ipsum aaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaa
              sadsasdd sadad sa dkasd lajdlalkdja kldja dkla ladj sk dlka dlak ladjsa  sajskadkas dak d
              asdad dsa dakd asdad asdadad.
            </p>
      
          </div>
        
      </div>

    </section>
  )
}

export default About