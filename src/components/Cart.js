import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CartContext from '../store/cart-context';
import axios from 'axios';

import './Cart.css'

const Cart = ({ setIsShowCart }) => {
    const cartCtx = useContext(CartContext)
    const [cartData, setCartData] = useState({
        itemList: [],
        cartAmount: 0
    })

    const onRemoveCart = async (id) => {

        // Remove @ and . from email using regular expressions
        const modifiedEmail = localStorage.getItem('email').replace(/[@.]/g, '');

        const response = await axios.get(`https://crudcrud.com/api/92bae8db60644641be91754d3e1dcaab/cart${modifiedEmail}`)

        const products = response.data[0]
        const existingCartItemIndex = products.items.findIndex(
            (item) => item.id === id
        );
        const existingItem = products.items[existingCartItemIndex];
        const updatedTotalAmount = products.totalAmount - existingItem.price;
        let updatedItems;
        if (existingItem.quantity === 1) {
            updatedItems = products.items.filter(item => item.id !== id);
        } else {
            const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
            updatedItems = [...products.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        axios.put(`https://crudcrud.com/api/92bae8db60644641be91754d3e1dcaab/cart${modifiedEmail}/${response.data[0]?._id}`, {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }).then((response) => {
            console.log("Remove response", response)
        }).catch((error) => {
            console.log(error)
        })

        cartCtx.dispatch({
            type: 'ISDELETEADD'
        })
    }

    const purchaseHandler = async () => {
        // Remove @ and . from email using regular expressions
        const modifiedEmail = localStorage.getItem('email').replace(/[@.]/g, '');
        const response = await axios.get(`https://crudcrud.com/api/92bae8db60644641be91754d3e1dcaab/cart${modifiedEmail}`)

        await axios.put(`https://crudcrud.com/api/92bae8db60644641be91754d3e1dcaab/cart${modifiedEmail}/${response.data[0]?._id}`, {
            items: [],
            totalAmount: 0,
        }).then((response) => {
            cartCtx.dispatch({
                type: 'CARTITEMS',
                numberOfCartItems: 0
            })
            cartCtx.dispatch({
                type: 'ISDELETEADD'
            })
            alert("Thank you for purchase")
        }).catch((error) => {
            console.log(error)
        })

    }

    const getProductItems = async () => {

        // Remove @ and . from email using regular expressions
        const modifiedEmail = localStorage.getItem('email').replace(/[@.]/g, '');

        const response = await axios.get(`https://crudcrud.com/api/92bae8db60644641be91754d3e1dcaab/cart${modifiedEmail}`);
        setCartData({
            itemList: response?.data[0]?.items || [],
            cartAmount: response?.data[0]?.totalAmount || 0
        })
        cartCtx.dispatch({ type: 'CARTITEMS', numberOfCartItems: response?.data[0]?.items.length || 0 })
    }

    useEffect(() => {
        getProductItems()
    }, [cartCtx.isDeleteAdd])

    return (
        <section id="cart" className="container">
            <h2>CART</h2>
            <button className="cancel" onClick={() => setIsShowCart(false)}>X</button>
            <div class="cart-row cart-header">
                <span class="cart-item cart-column">ITEM</span>
                <span class="cart-price cart-column">PRICE</span>
                <span class="cart-quantity cart-column">QUANTITY</span>
            </div>

            <div class="cart-items">
                {cartData?.itemList.length > 0 && cartData?.itemList.map((item) => <div class="cart-row">
                    <span class='cart-item cart-column'>
                        <img class='cart-img' src={item.imageUrl} alt="" />
                        <span>{item.title}</span>
                    </span>
                    {/* price */}
                    <span class='cart-price cart-column'>{item.price}</span>
                    {/* quantity */}
                    <span class='cart-quantity cart-column'>
                        <input type="text" value={item.quantity} />
                        <button onClick={() => { onRemoveCart(item.id) }}>REMOVE</button>
                    </span>
                </div>)}

            </div>

            <div class="cart-total">
                <span>
                    <span class="total-title"> <strong>Total</strong>
                    </span>
                    $<span id="total-value">{cartData?.cartAmount}</span>
                </span>
            </div>
            <button class="purchase-btn" type="button" onClick={purchaseHandler}>PURCHASE</button>
        </section>


    )
}


export default Cart;





