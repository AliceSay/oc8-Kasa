import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import reportWebVitals from './reportWebVitals.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={App} />
        <Route path='/logement/:id' element={Logement} />
        <Route path='/about' element={About} />
        <Route path='/*' element={Error} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
