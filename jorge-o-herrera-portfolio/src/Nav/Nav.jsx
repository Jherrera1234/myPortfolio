import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import { Icon } from '@iconify/react';

export default function Nav() {
  return (
    <div className='nav-bar'>
      <Link className='nav-links' to='/'>

        <img className='home-logo' src="https://i.imgur.com/7UtSjKM.png?1" alt="home" />

      </Link>
      <div className='titles'>

        <Link className='nav-links' to='/projects'>
          <p className='projects-nav'>Projects</p>
        </Link>

        <Link className='nav-links' to='/contact-me'>
          <p className='contact-nav'>Contact</p>
        </Link>

        <a className='resume-links' href='https://drive.google.com/file/d/1PiK1vfIBtMco0r9XHUPIzlcZ5B2wxONw/view?usp=sharing' target="_blank">Resume</a>

      </div>


    </div >
  )
}
