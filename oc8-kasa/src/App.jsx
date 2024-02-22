import React from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Banner from './components/Banner.jsx'
import LocationGrid from './components/LocationGrid.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <LocationGrid />
      <Main />
      <Footer />
    </div>
  )
}

export default App
