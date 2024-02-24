import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img src='logo.png' alt='logo' />
      </div>

      <div className='navbar__Accueil-Apropos'>
        <NavLink to='/' className='navbar__accueil'>
          Accueil
        </NavLink>
        <NavLink to='/about' className='navbar__apropos'>
          A Propos
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
