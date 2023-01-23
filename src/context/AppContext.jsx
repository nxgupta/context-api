import React, {createContext,useContext} from 'react';
import faker from 'faker'
import { useReducer } from 'react';
import { cartReducer } from './Reducer';
const Cart=createContext();
const AppContext=({children})=>{
    const products = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.random.image(),
        inStock: faker.random.arrayElement([0, 3, 5, 6, 7]),
        fastDelivery: faker.datatype.boolean(),
        ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
      }));

    const [state,dispatch]=useReducer(cartReducer,{cart:[],products})
    return <Cart.Provider value={{state, dispatch}}>
        {children}
    </Cart.Provider>
}
export default AppContext;
export const useCartContext=()=>{
    return useContext(Cart);
}
