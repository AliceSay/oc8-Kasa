import React from 'react'
import './ApartmentBanner.css'

function ApartmentBanner(props) {
  return (
    <div>
      <img className='apartment-img' src={props.imageUrl} alt='' />
    </div>
  )
}

export default ApartmentBanner
