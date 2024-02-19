import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CartContext from '../store/cart-context';
import axios from 'axios';

const Products = ({ item }) => {
  const { id, productID, title, price, imageUrl, quantity, imageList } = item;
  const cartCtx = useContext(CartContext)

  const addAmountNumberandler = async () => {

    const state = {
      items: [],
      totalAmount: 0,
    }

    // Remove @ and . from email using regular expressions
    const modifiedEmail = localStorage.getItem('email').replace(/[@.]/g, '');

    const response = await axios.get(`https://crudcrud.com/api/92bae8db60644641be91754d3e1dcaab/cart${modifiedEmail}`)

    if (response?.data?.length === 0) {
      //
      const updatedTotalAmount =
        state.totalAmount + price * quantity;
      let updatedItems;
      updatedItems = [...state.items, item]
      //
      axios.post(`https://crudcrud.com/api/92bae8db60644641be91754d3e1dcaab/cart${modifiedEmail}`, {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }).then((response) => {
          cartCtx.dispatch({
            type:'CARTITEMS',
            numberOfCartItems:updatedItems?.length
          })
      }).catch((error) => {
        console.log(error)
      })
    }
    else if (response?.data?.length > 0) {
      ///
      state.items = response?.data[0]?.items;
      state.totalAmount = response?.data[0]?.totalAmount;

      const updatedTotalAmount =
        state.totalAmount + price * quantity;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + quantity,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
        //

      } else {
        updatedItems = [...state.items, item]
      }
      axios.put(`https://crudcrud.com/api/92bae8db60644641be91754d3e1dcaab/cart${modifiedEmail}/${response.data[0]?._id}`, {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }).then((response) => {
        cartCtx.dispatch({
          type:'CARTITEMS',
          numberOfCartItems:updatedItems?.length
        })
      }).catch((error) => {
        console.log(error)
      })
    }

    cartCtx.dispatch({
      type:'ISDELETEADD'
    })
  
  }

  return (
    <div className=''>
      <h3>{title}</h3>
      {/* <Link to={`/store/:${productID}`}> */}
      <Card style={{ width: '18rem' }}>
        <Card.Img  src={imageUrl} />

        <Card.Body className='card-body'>
          <p>${price}</p>
          <Button variant="info" onClick={addAmountNumberandler} >ADD TO CART</Button>
        </Card.Body>
      </Card>
      {/* </Link> */}
    </div>
  )
}

export default Products;


