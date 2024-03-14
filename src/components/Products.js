import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CartContext from '../store/cart-context';
import axios from 'axios';

const Products = ({ item }) => {
  const { id, title, price, imageUrl, quantity } = item;
  const cartCtx = useContext(CartContext)

  const addAmountNumberandler = async () => {

    // Remove @ and . from email using regular expressions
    const modifiedEmail = localStorage.getItem('email').replace(/[@.]/g, '');

    const response = await axios.get(`https://sh-ecommerce-default-rtdb.firebaseio.com/cart${modifiedEmail}.json`)

    const { data } = response
    const cartProductLength = response?.data ? Object.keys(response.data).length : 0;

    if (cartProductLength) {
      const fetchedProductList = [];
      for (const productID in data) {

        fetchedProductList.push({
          productID,
          id: data[productID].id,
          title: data[productID].title,
          imageUrl: data[productID].imageUrl,
          price: data[productID].price,
          quantity: data[productID].quantity,
        })
      }

      const existingCartItemIndex = fetchedProductList.findIndex(
        (item) => item.id === id
      );
      const existingCartItem = fetchedProductList[existingCartItemIndex];


      if (existingCartItem) {
        return alert("Item already added to cart")

      }
    }


    try {
      const response = await axios.post(`https://sh-ecommerce-default-rtdb.firebaseio.com/cart${modifiedEmail}.json`, { id, title, price, imageUrl, quantity })

      const getResponse = await axios.get(`https://sh-ecommerce-default-rtdb.firebaseio.com/cart${modifiedEmail}.json`)
     
      // total amount calculation
      const { data } = getResponse
      const fetchedProductList = [];
      for (const productID in data) {

        fetchedProductList.push({
          productID,
          id: data[productID].id,
          title: data[productID].title,
          imageUrl: data[productID].imageUrl,
          price: data[productID].price,
          quantity: data[productID].quantity,
        })
      }
      const totalAmount = fetchedProductList.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)

      //////

      cartCtx.dispatch({
        type: 'AMOUNT',
        totalAmount
      })

      cartCtx.dispatch({
        type: 'CARTITEMS',
        numberOfCartItems: Object.keys(response.data).length
      })

      cartCtx.dispatch({
        type: 'ISDELETEADD'
      })
    }
    catch (err) {
      console.log(err)
    }



  }



  return (
    <div className=''>
      <h3>{title}</h3>
      <Card style={{ width: '18rem' }}>
        <Card.Img src={imageUrl} />

        <Card.Body className='card-body'>
          <p>${price}</p>
          <Button variant="info" onClick={addAmountNumberandler} >ADD TO CART</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default Products;


