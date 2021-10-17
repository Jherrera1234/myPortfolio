import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

export default function Nav() {
  return (
    <div className='nav-bar'>
      <Link className='nav-links' to='/'>
        <p className='home-nav'>Home</p>
      </Link>
      <div className='titles'>

        <Link className='nav-links' to='/projects'>
          <p className='projects-nav'>Projects</p>
        </Link>

        <Link className='nav-links' to='/contact-me'>
          <p className='contact-nav'>Contact</p>
        </Link>


      </div>


    </div >
  )
}
