import React from 'react'
import Cart from './components/Cart'
import Home from './components/Home'
import {Routes,Route} from 'react-router-dom'
import Header from './components/Header'
import './App.css'
import { useState } from 'react'

const App = () => {
  return (
    <div>
      <Header />
      <div className="app">
        <Routes>
          <Route path='/' element={<Home  />} />
          <Route path='/cart' element={<Cart />}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
