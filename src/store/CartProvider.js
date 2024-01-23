import React,{useReducer, useState} from 'react'
import CartContext from './cart-context'

const defaultState={
    items:[],
    totalAmount:0
}

const cartReducer = (state,action)=>{
 if(action.type==="ADD"){
  console.log("context",action.item)
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      
      updatedItems =[...state.items,action.item]
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  if(action.type==="REMOVE"){
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.quantity === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

 }


export const CartProvider = (props) => {
const [cartState, dispatch] = useReducer(cartReducer,defaultState);
const [token,setToken] = useState(null);

const addItemToCartHandler=(item)=>{
  dispatch({type:'ADD',item})
}

const removeItemFromCartHandler =(id)=>{
    dispatch({type:'REMOVE',id})
}

//for login
const userIsLoggedIn = !!token;

const loginHandler =(token)=>{
setToken(token)
}

const logoutHandler =()=>{
  setToken(null)
  }

const cartContextValues = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    //for login
    token:token,
    isLoggedIn:userIsLoggedIn,
    login:loginHandler,
    logout:logoutHandler
}

  return (
    <CartContext.Provider value={cartContextValues}>
  {props.children}
    </CartContext.Provider>
  )
}


export default CartProvider;