import React from 'react'
import './Hero.css'

import profilePic from '../../../assets/images/profile-pic.png'
import Button from '../../Button/Button'

const Hero = () => {
    return (
        <section className="section hero" aria-label='hero section' id='hero'>
            <div className="container">
                <div className="profile-wrapper">
                    <img src={profilePic} className='profile-pic' alt="Gabriele" />
                    <div className='border'></div>
                </div>

                <div className="hero-content">
                    <p className='hero-subtitle'>ASPIRANTE FRONT END DEVELOPER</p>
                    <h1 className="hero-title">Ciao, sono <span>Gabriele Prestano</span></h1>
                    <p className="hero-desc">Sono un aspirante front end developer di 21 anni con una grande passione per la programmazione e che sta costruendo il suo futuro.</p>

                    <a href="#contacts"><Button label="Contattami" /></a>
                </div>
            </div>
        </section>
    )
}

export default Hero