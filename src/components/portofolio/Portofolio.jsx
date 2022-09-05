import React from 'react'
import './Portofolio.css'

import IMG1 from '../../assets/fb-clone.jpg'

function Portofolio() {
  return (
    <section id='portofolio'>
        <h5>My Work</h5>
        <h2>Portofolio</h2>

        <div className='portofolio-container'>
            <article className='portofolio-item'>
                <div className='portofolio-item-image'>
                  <img src={IMG1} alt='fb-clone' />
                </div>

                <h3>TITLE</h3>
                {/* REPO: */}
                <a className='btn' target='_blank' rel="noreferrer" href="https://github.com/Hvdri?tab=repositories">Github</a>
                {/* DEMO: */}
                <a className='btn' target='_blank' rel="noreferrer" href="https://github.com/Hvdri?tab=repositories">Live Demo</a>

            </article>
        </div>

    </section>
  )
}

export default Portofolio