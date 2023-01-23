import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import Rating from './Rating'

const Filters = () => {
    const [rate,setRate]=useState(3)
  return (
    <div className='filters'>
      <span className='title'>Filter Products</span>
      <span><Form.Check
            inline
            type="radio"
            label="Ascending"
            name="order"
            id="asc"
          /></span>
    <span><Form.Check
            inline
            type="radio"
            label="Descending"
            name="order"
            id="desc"
          /></span>
        <span><Form.Check
            inline
            type="checkBox"
            label="Include Out of stock"
            name="stock"
            id="stock"
          /></span>
        <span><Form.Check
            inline
            type="checkBox"
            label="Fast Delivery Only"
            name="delivery"
            id="delivery"
          /></span>
      <label style={{paddingRight : 10 }}>Rating:</label>
      <Rating rating={rate} style={{cursor:"pointer"}} onClick={(i)=>setRate(i+1)}/>
      <Button variant='light'>Clear Filters</Button>

    </div>
  )
}

export default Filters
