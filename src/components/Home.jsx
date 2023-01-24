import React from 'react'
import { useCartContext } from '../context/AppContext'
import Filters from './Filters';
import SingleProduct from './singleProduct'
import './styles.css'



const Home = () => {

  const { state: { products }, productState: {
    byStock, byFastDelivery, sort, byRating, searchQuery
  } } = useCartContext();

  function TransformProducts() {
    let transformedProducts = products;
    if (sort) {
      transformedProducts.sort((a, b) => {
        if (sort === 'lowtohigh') {
          return a.price - b.price
        }
        else {
          return b.price - a.price
        }
      })
    }
    if (!byStock){
      transformedProducts=transformedProducts.filter(item=>item.inStock)
    }
    if (byFastDelivery){
      transformedProducts=transformedProducts.filter(item=>item.fastDelivery)
    }
    if(byRating){
      transformedProducts=transformedProducts.filter(item=>item.ratings>=byRating)
    }
    if(searchQuery){
      transformedProducts=transformedProducts.filter(item=>item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    }
    return transformedProducts;
  }

  return (
    <div className='home'>
      <Filters />
      <div className='productContainer'>
        {TransformProducts().map(prod => (
          <SingleProduct prod={prod} key={prod.id} />
        ))}
      </div>
    </div>
  )
}

export default Home
