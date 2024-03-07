import React from 'react'
import './ApartmentHeader.css'

function ApartmentHeader(props) {
  const apartment = props.apartment
  const name = props.apartment.host.name
  const [firstName, lastName] = name.split(' ')
  return (
    <div className='apartment__header'>
      <div className='apartment__title'>
        <h3>{apartment.title}</h3>
        <h4>{apartment.location}</h4>
        <div className='apartment__tags'>
          {apartment.tags.map((tag) => (
            <span className='apartment__tag' key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className='apartment__owner'>
        <div className='apartment__owner__details'>
          <h5>
            <span>{firstName}</span>
            <span>{lastName}</span>
          </h5>
          <div className='apartment__owner__badge'>
            <img src={apartment.host.picture} alt='' />
          </div>
        </div>
        <div className='apartment__owner__stars'>
          {[1, 2, 3, 4, 5].map((num) => (
            <span
              key={num}
              className={props.apartment.rating >= num ? 'on' : ''}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ApartmentHeader
