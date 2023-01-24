import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useCartContext } from '../context/AppContext'
import Rating from './Rating'

const Filters = () => {

  const {productState:{
    byStock, byFastDelivery, sort, byRating, searchQuery
  }, productDispatch}= useCartContext();

  console.log(byStock, byFastDelivery, sort, byRating, searchQuery)
  return (
    <div className='filters'>
      <span className='title'>Filter Products</span>
      <span><Form.Check
        inline
        type="radio"
        label="Ascending"
        name="sort"
        id="asc"
        onChange={()=>productDispatch({type:'SORT_BY_PRICE', payload:'lowtohigh'})}
        checked={sort==="lowtohigh"}
      /></span>
      <span><Form.Check
        inline
        type="radio"
        label="Descending"
        name="sort"
        id="desc"
        onChange={()=>productDispatch({type:'SORT_BY_PRICE', payload:'hightolow'})}
        checked={sort==="hightolow"}
      /></span>
      <span><Form.Check
        inline
        type="checkBox"
        label="Include Out of stock"
        name="stock"
        id="stock"
        onChange={()=>productDispatch({type:'SORT_BY_STOCK'})}
        checked={byStock}
      /></span>
      <span><Form.Check
        inline
        type="checkBox"
        label="Fast Delivery Only"
        name="delivery"
        id="delivery"
        onChange={()=>productDispatch({type:'SORT_BY_DELIVERY'})}
        checked={byFastDelivery}
      /></span>
      <span>

      <label style={{ paddingRight: 10 }}>Rating: </label>
      <Rating rating={byRating} style={{ cursor: "pointer" }} onClick={(i) => productDispatch({type:'SORT_BY_RATING',
        payload: i+1
        })} />
      </span>
      <Button variant='light' onClick={()=>productDispatch({type:'CLEAR_FILTERS'})}>Clear Filters</Button>

    </div>
  )
}

export default Filters
