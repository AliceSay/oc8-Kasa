import React, { useEffect, useState } from 'react'
import './LocationGrid.css'
import Location from '../Location/Location.jsx'

function LocationGrid() {
  const [apartments, setApartments] = useState([])

  useEffect(fetchApartments, [])

  function fetchApartments() {
    fetch('logements.json')
      .then((res) => res.json())
      .then((res) => setApartments(res))
      .catch(console.error)
  }

  return (
    <div className='grid'>
      {apartments.map((apartment) => (
        <Location
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
        />
      ))}
    </div>
  )
}

export default LocationGrid
