import React from 'react'
import styled from 'styled-components'
const SingleProduct = ({ prod }) => {
  return (
    <Wrapper>
      <div className='container'>
        <img src={prod.image} alt={prod.name} />
        <div className='card'>
          <p className='card-detail'>
            <span>{prod.name}</span>
            <span>{prod.price}</span>
          </p>
          <button className='card-btn'>Add to cart</button>
        </div>
      </div>
    </Wrapper>
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
