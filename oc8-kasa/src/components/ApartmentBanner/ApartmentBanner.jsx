import React from 'react'
import './ApartmentBanner.css'

function ApartmentBanner(props) {
  const pictures = props.pictures
  return (
    <div className='apartment-img'>
      {pictures.map((pic) => (
        <img key={pic} src={pic} alt={pic} />
      ))}
    </div>
  )
}

export default ApartmentBanner
