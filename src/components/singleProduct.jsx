import React from 'react'
import { Button, Card } from 'react-bootstrap'
import styled from 'styled-components'
import { useCartContext } from '../context/AppContext'
import Rating from './Rating'
const SingleProduct = ({ prod }) => {
  const {state:{cart},dispatch}=useCartContext();
  return (
    <div className='products'>
      <Card>
        <Card.Img variant='top' src={prod.image} alt={prod.name}/>
        <Card.Body>
          <Card.Title>{prod.Name}</Card.Title>
        <Card.Subtitle style={{ paddingBottom: 10 }}>
          <span>₹ {prod.price.split('.')[0]}</span>
          {prod.fastDelivery?<div>Fast Delivery</div>:<div>4 Day Delivery</div>}
          <Rating rating={prod.ratings} />
        </Card.Subtitle>
        {cart.some(p=>p.id===prod.id)?
        <Button onClick={()=>dispatch({
          type:"REMOVE_FROM_CART", payload:prod
        })}variant="danger">Remove from Cart</Button>:
        <Button onClick={()=>dispatch({
          type:"ADD_TO_CART", payload:prod
        })} variant="primary" disabled={!prod.inStock}>{prod.inStock?"Add to Cart":"Out of Stock"}</Button>}
        </Card.Body>
      </Card>
    </div>
  )
}

export default SingleProduct
const Wrapper = styled('div')`
 *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
 }
  .container{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 250px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  font-family: arial;
  }
  img{
    width: 100%;
  }
  .card-detail{
    display: flex;
    justify-content: space-between;
    margin-bottom: 5px;
  }
  button{
    border:none;
    text-decoration: none;
    padding: 5px;
    width: 50%;
    background-color:#008CBA;
    color: white;
    border-radius: 5px;
  }
`
