import React from 'react'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import { useCartContext } from './context/AppContext'
import './styles.css'

const Header = () => {
  const {cart}=useCartContext();
  return (
    <div>
      <span className='header'>React Context API Tutorial</span>
      <ul className='nav'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='cart'>Cart({cart.length}) </Link>
        </li>
      </ul>
    </div>
  )
}

export default Header
