import React from 'react'
import './App.css'
import Main from './components/Main/Main.jsx'
import Banner from './components/Banner/Banner.jsx'
import LocationGrid from './components/LocationGrids/LocationGrid.jsx'

function App() {
  return (
    <div>
      <Main>
        <Banner />
        <LocationGrid />
      </Main>
    </div>
  )
}

export default App
