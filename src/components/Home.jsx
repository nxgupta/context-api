import React from 'react'
import {useCartContext} from '../context/AppContext'
import Filters from './Filters';
import SingleProduct from './singleProduct'
import './styles.css'
const Home = () => {

  const {state:{products}}=useCartContext();
  return (
    <div className='home'>
      <Filters/>
      <div className='productContainer'>
        {products.map(prod=>(
          <SingleProduct prod={prod} key={prod.id}/>
        ))}
      </div>
    </div>
  )
}

export default Home
