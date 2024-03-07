import React, { useEffect, useState } from 'react'
import './ApartmentPage.css'
import DescriptionPanel from '../../components/ApartmentDescription/DescriptionPanel.jsx'
import ApartmentBanner from '../../components/ApartmentBanner/ApartmentBanner.jsx'
import ApartmentHeader from '../../components/ApartmentHeader/ApartmentHeader.jsx'
import { useLocation } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function ApartmentPage() {
  const location = useLocation()
  const [selectedApartment, setSelectedApartment] = useState(null)
  const navigate = useNavigate()

  useEffect(fetchApartmentData, [])

  function fetchApartmentData() {
    fetch('logements.json')
      .then((res) => res.json())
      .then((apartments) => {
        const apartment = apartments.find(
          (apartment) => apartment.id === location.state.apartmentId
        )
        setSelectedApartment(apartment)
      })
      .catch(() => navigate('/erreur'))
  }

  return (
    <div className='apartment-page'>
      {selectedApartment ? (
        <>
          <ApartmentBanner imageUrl={selectedApartment.cover} />
          <ApartmentHeader apartment={selectedApartment} />
          <div className='apartment__description__area'>
            <DescriptionPanel
              title='Description'
              content={selectedApartment.description}
            />
            <DescriptionPanel
              title='Equipements'
              content={selectedApartment.equipments.map((eq) => (
                <li>{eq}</li>
              ))}
            />
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}

export default ApartmentPage
