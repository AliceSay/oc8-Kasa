import React from 'react'
import './Location.css'
import { Link } from 'react-router-dom'

// Paramètres (id)
function Location({ id }) {
  return (
    <div className='location'>
      <Link to='/apartment'>
        <div className='location__subtitle'>Titre de la location</div>
      </Link>
    </div>
  )
}

export default Location
