import React from 'react'
import './ApartmentHeader.css'

function ApartmentHeader() {
  return (
    <div className='apartment__header'>
      <div className='apartment__title'>
        <h3>Cozy loft on the Canal Saint-Martin</h3>
        <h4>Paris, île-de-France</h4>
        <div className='apartment__tags'>
          <span className='apartment__tag'>Cozy</span>
          <span className='apartment__tag'>Canal</span>
          <span className='apartment__tag'>Paris 10</span>
        </div>
      </div>
      <div className='apartment__owner'>
        <div className='apartment__owner__details'>
          <h5>
            <span>Alexandre</span>
            <span> Dumas</span>
          </h5>
          <div className='apartment__owner__badge'></div>
        </div>
        <div className='apartment__owner__stars'>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
          <span>☆</span>
        </div>
      </div>
    </div>
  )
}

export default ApartmentHeader
