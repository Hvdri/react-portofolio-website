import React from 'react';
import './Contact.css';

import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineInstagram, AiFillLinkedin, AiOutlineGithub } from 'react-icons/ai'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className='contact-container'>
        <div className='contact-options'>
          <article className='contact-options-items'>
            <a href="mailto:horia.marinescu12@gmail.com" target='blank'>
            <AiOutlineMail className='contact-options-icon'/>
            <h4>E-mail</h4>
            </a>
          </article>
          <article className='contact-options-items'>
            <a href="https://github.com/Hvdri" target='blank'>
            <AiOutlineGithub className='contact-options-icon'/>
            <h4>Github</h4>
            </a>
          </article>  

          <article className='contact-options-items'>
            <a href="https://www.linkedin.com/in/horia-andrei-marinescu-8a9543223/" target='blank'>
            <AiFillLinkedin className='contact-options-icon'/>
            <h4>Linkedin</h4>
            </a>
          </article>

          <article className='contact-options-items'>
            <a href="https://wa.me/+40746434145" target='blank'>
            <AiOutlineWhatsApp className='contact-options-icon'/>
            <h4>WhatsApp</h4>
            </a>
          </article> 

          <article className='contact-options-items'>
            <a href="https://www.linkedin.com/in/horia-andrei-marinescu-8a9543223/" target='blank'>
            <AiOutlineInstagram className='contact-options-icon'/>
            <h4>Instagram</h4>
            </a>
          </article>     
        </div> 

          <form action=''>
            <input type='text' name='name' placeholder='Name' required/>
            <input type='email' name='email' placeholder='Email' required/>
            <textarea name='message' placeholder='Your Message' rows='7' required></textarea>
            <button className='btn' type='submit'></button>
          </form>
      </div>
    </section>
  )
}

export default Contact