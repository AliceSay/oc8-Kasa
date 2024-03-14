import React from 'react'
import './Location.css'
import { Link } from 'react-router-dom'

function Location(props) {
  return (
    <Link
      className='location'
      to={`/apartment/${props.id}`}
      state={{ apartmentId: props.id }}
    >
      <img className='location__img' src={props.imageUrl} alt='' />
      <div className='location__subtitle'>{props.title}</div>
    </Link>
  )
}

export default Location
