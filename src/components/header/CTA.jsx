import React from 'react'
import CV from '../../assets/resume.pdf'

function CTA() {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn'>Want to talk?</a>
    </div>
  )
}

export default CTA