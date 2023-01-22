import { useState } from 'react';
import {createContext,useContext} from 'react'

const Cart=createContext();

const AppContext = ({children}) => {
  const [cart,setCart]=useState([])
  return (
    <Cart.Provider value={{cart,setCart}}>
      {children}
    </Cart.Provider>
  )
}
export default AppContext;
export const useCartContext=()=>{
  return useContext(Cart);
}