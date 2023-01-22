import React from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import AppContext from './components/context/AppContext'


createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AppContext>
      <App/>
    </AppContext>
    </BrowserRouter>
  </React.StrictMode>,
)
