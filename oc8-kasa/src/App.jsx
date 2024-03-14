import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './pages/HomePage/Home.jsx'
import ApartmentPage from './pages/ApartmentPage/ApartmentPage.jsx'
import About from './pages/AboutPage/About.jsx'
import Error from './pages/ErrorPage/Error.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/apartment/:id' element={<ApartmentPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
