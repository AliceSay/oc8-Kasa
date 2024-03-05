import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Logement from './pages/ApartmentPage/ApartmentPage.jsx'
import About from './pages/About.jsx'
import Error from './pages/Error.jsx'
import reportWebVitals from './reportWebVitals.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/apartment' element={<Logement />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
