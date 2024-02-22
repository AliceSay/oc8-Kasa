import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar__logo'>
        <img src='logo.png' alt='logo' />
      </div>

      <div className='navbar__Accueil-Apropos'>
        <div className='navbar__accueil'>Accueil</div>
        <div className='navbar__apropos'>A Propos</div>
      </div>
    </nav>
  )
}

export default Navbar
