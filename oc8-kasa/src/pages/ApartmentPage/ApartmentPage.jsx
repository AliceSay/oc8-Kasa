import React, { useEffect, useState } from 'react'
import './ApartmentPage.css'
import DescriptionPanel from '../../components/ApartmentDescription/DescriptionPanel.jsx'
import ApartmentBanner from '../../components/ApartmentBanner/ApartmentBanner.jsx'
import ApartmentHeader from '../../components/ApartmentHeader/ApartmentHeader.jsx'
import { useNavigate, useParams } from 'react-router-dom'

function ApartmentPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [selectedApartment, setSelectedApartment] = useState(null)

  useEffect(() => {
    fetch('/logements.json')
      .then((res) => res.json())
      .then((apartments) => {
        const apartment = apartments.find((apartment) => apartment.id === id)
        if (apartment) {
          setSelectedApartment(apartment)
        } else {
          navigate('/erreur')
        }
      })
      .catch((error) => {
        navigate('/erreur')
      })
  }, [id, navigate])

  return (
    <div className='apartment-page'>
      {selectedApartment ? (
        <>
          <ApartmentBanner pictures={selectedApartment.pictures} />
          <ApartmentHeader apartment={selectedApartment} />
          <div className='apartment__description__area'>
            <DescriptionPanel
              title='Description'
              content={selectedApartment.description}
            />
            <DescriptionPanel
              title='Equipements'
              content={selectedApartment.equipments.map((eq, index) => (
                <li key={index}>{eq}</li>
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
