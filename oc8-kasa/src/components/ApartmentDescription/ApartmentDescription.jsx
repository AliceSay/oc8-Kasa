import React from 'react'
import './ApartmentDescription.css'

function ApartmentDescription() {
  return (
    <div className='apartment__description'>
      <p className='description__header'>
        <span>Description</span>
        <i className='fa-solid fa-chevron-down'></i>
      </p>
      <p className='description__content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        nostrum nulla nisi non fuga sapiente fugit itaque aliquam quis alias?
        Sunt eos architecto dignissimos numquam, quibusdam enim ratione
        inventore doloribus delectus necessitatibus temporibus sed tempore
        eveniet voluptate ea eum amet at facilis harum exercitationem nostrum
        illo. Rerum saepe expedita blanditiis.
      </p>
    </div>
  )
}

export default ApartmentDescription
