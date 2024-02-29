import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <NavLink to='/'>
        <div className='navbar__logo'>
          <img src='logo.png' alt='logo' />
        </div>
      </NavLink>

      <div className='navbar__Accueil-Apropos'>
        <NavLink to='/' className='navbar__accueil'>
          <div>Accueil</div>
        </NavLink>
        <NavLink to='/about' className='navbar__apropos'>
          <div>A Propos</div>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
