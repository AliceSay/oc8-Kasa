import React from 'react'
import ApartmentBanner from '../../components/ApartmentBanner/ApartmentBanner'
import DescriptionPanel from '../../components/ApartmentDescription/DescriptionPanel'
import './About.css'

function About() {
  return (
    <>
      <ApartmentBanner />
      <div className='about__container'>
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
        <DescriptionPanel />
      </div>
    </>
  )
}

export default About
