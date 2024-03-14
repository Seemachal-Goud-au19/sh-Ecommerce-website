import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CartContext from './cart-context'
import axios from 'axios';

const defaultState = {
  items: [],
  totalAmount: 0,
  numberOfCartItems: 0,
  userEmail: localStorage.getItem('email'),
  isDeleteAdd: false
}

//for crud crud api
const cartProductsInBackendHandler = async (updatedItems, updatedTotalAmount, userEmail) => {

  // Remove @ and . from email using regular expressions
  const modifiedEmail = localStorage.getItem('email').replace(/[@.]/g, '');

  const response = await axios.get(`https://crudcrud.com/api/a007a6d4eac247abbc429216d38717e6/cart${modifiedEmail}`)

  if (response?.data?.length === 0) {
    axios.post(`https://crudcrud.com/api/a007a6d4eac247abbc429216d38717e6/cart${modifiedEmail}`, {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }).then((response) => {

    }).catch((error) => {
      console.log(error)
    })
  }
  else if (response?.data?.length > 0) {
    axios.put(`https://crudcrud.com/api/a007a6d4eac247abbc429216d38717e6/cart${modifiedEmail}/${response.data[0]?._id}`, {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    }).then((response) => {

    }).catch((error) => {
      console.log(error)
    })
  }


}



const cartReducer = (state, action) => {
  if (action.type === "AMOUNT") {


    return {
      ...state,
      totalAmount: action.totalAmount,
    };
  }



  if (action.type === 'LOGIN') {
    return {
      ...state,
      userEmail: action.email
    }
  }

  if (action.type === 'CARTITEMS') {
    return {
      ...state,
      numberOfCartItems: action.numberOfCartItems
    }
  }

  if (action.type === 'ISDELETEADD') {
    return {
      ...state,
      isDeleteAdd: !state.isDeleteAdd
    }
  }

}


export const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultState);
  const initialToken = localStorage.getItem('token'); //getting token from localstorage
  const [token, setToken] = useState(initialToken);
  // const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();

  const addItemToCartHandler = (item) => {
    dispatch({ type: 'ADD', item })
  }

  // const removeItemFromCartHandler = (id) => {
  //   dispatch({ type: 'REMOVE', id })
  // }


  //for login
  const userIsLoggedIn = !!token;

  const loginHandler = (token, email) => {
    setToken(token)
    // setUserEmail(email)
    dispatch({ type: 'LOGIN', email })
    localStorage.setItem('token', token)
    localStorage.setItem('email', email)
  }

  const logoutHandler = () => {
    setToken(null);
    // setUserEmail(null)
    localStorage.removeItem('token')
    localStorage.removeItem('email')
    navigate('/login')
  }

  // setTimeout(()=>{
  //   localStorage.removeItem('token')
  // },5000*12*5) // token active for 5 min

  const cartContextValues = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    numberOfCartItems: cartState.numberOfCartItems,
    userEmail: cartState.userEmail,
    isDeleteAdd: cartState.isDeleteAdd,
    addItem: addItemToCartHandler,
    // removeItem: removeItemFromCartHandler,
    dispatch,
    //for login
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  }

  return (
    <CartContext.Provider value={cartContextValues}>
      {props.children}
    </CartContext.Provider>
  )
}


export default CartProvider;