import React from 'react'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import './Header.css'

function Header() {
  return (

    <header>

      <div className="header_container">

        <h5>Hello I'm</h5>
        <h1>Horia-Andrei Marinescu</h1>
        <h5 className="text-light">Web Developer</h5>

        <CTA />

        <div className='me'>

          <HeaderSocials />
          <img src={ME} alt="me" />

        </div>
        
        <a href="#contact" className="scroll_down">Scroll Down</a>

        

      </div>

    </header>

    )
}

export default Header