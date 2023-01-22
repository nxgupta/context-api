import React, { useEffect, useState } from 'react'
import { useCartContext } from './context/AppContext';
import SingleProduct from './SingleProduct'

const Cart = () => {
  let [total, setTotal] = useState(0)
  const { cart, setCart } = useCartContext();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => { return acc + Number(curr.price) }, 0))
  }, [cart])

  return (

    <div>
      <header>My Cart</header>
      <header>Total: Rs. {total}</header>
      <div className='productContainer'>
        {cart.map(prod => {
          return (
            <SingleProduct key={prod.id} prod={prod}/>)
        }
        )} 
      </div>
    </div>
  )

}

export default Cart
