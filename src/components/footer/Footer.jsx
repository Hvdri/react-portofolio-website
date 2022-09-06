import React from 'react'
import './Footer.css'

import { AiFillFacebook, AiOutlineInstagram } from 'react-icons/ai'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer-logo'>a</a>

      <ul className='permalinks'>
        <li> <a href='#'></a>Home</li>
        <li> <a href='#about'></a>About</li>
        <li> <a href='#experience'></a>Experience</li>
        <li> <a href='#services'></a>Services</li>
        <li> <a href='#portofolio'></a>Portofolio</li>
        <li> <a href='#contact'></a>Contact</li>
      </ul>

      <div className='footer-socials'>
        <a href=''><AiOutlineInstagram /></a>
        <a href=''><AiFillFacebook /></a>
      </div>

    </footer>
  )
}

export default Footer