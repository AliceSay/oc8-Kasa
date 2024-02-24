import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import reportWebVitals from './reportWebVitals.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1>404 not found</h1>,
  },
  {
    path: '/aparment',
    element: <h1>Appartements en location</h1>,
  },
  {
    path: '/about',
    element: <h1>A Propos</h1>,
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
