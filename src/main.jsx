import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './route'
import './index.css'
import './assets/css/style.min.css'
import './assets/css/font-style.css'
import './assets/css/vendors/bootstrap.min.css'
import "./assets/css/vendors/feather-icon.css"
import "./assets/css/vendors/ion.rangeSlider.min.css"
import "./assets/css/vendors/animate.css"
import "./assets/css/vendors/slick/slick-theme.css"
import "./assets/css/vendors/slick/slick.css"
import './assets/css/bulk-style.css'
import './assets/css/animate.min.css'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
)
