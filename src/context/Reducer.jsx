export const cartReducer=(state,action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
            return {...state, cart:[...state.cart,{...action.payload,qty:1}]}
        case 'REMOVE_FROM_CART':
            return {
                ...state,cart:state.cart.filter(c=> c.id!==action.payload.id)
            }
        case 'CHANGE_PRODUCT_QUANTITY':
            return {
                ...state,cart:state.cart.map(item=>{
                    if(item.id===action.payload.id){
                        return {...item,qty:action.payload.qty}
                    }
                    return item
                }
            )
            }
        default:
            return state;
    }
}

export const productReducer=(state,action)=>{
    switch(action.type){
        case 'SORT_BY_PRICE':
            return {
                ...state, sort: action.payload
            }
        case 'SORT_BY_STOCK':
            return {
                ...state, byStock:!state.byStock
            }
        case 'SORT_BY_DELIVERY':
            return {
                ...state, byFastDelivery: !state.byFastDelivery
            }
        case 'SORT_BY_RATING':
            return {
                ...state, byRating: action.payload
            }
        case 'SORT_BY_SEARCH':
        return {
            ...state, searchQuery: action.payload
        }
        case 'CLEAR_FILTERS':
        return {
            byStock:false,
            byFastDelivery:false,
            byRating: 0,
            sort:"",
            searchQuery: "",
          }
        default:
            return state;
    }
}