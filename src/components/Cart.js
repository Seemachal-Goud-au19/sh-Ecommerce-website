import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../store/cart-context';
import axios from 'axios';

import './Cart.css'

const Cart = ({ setIsShowCart }) => {
    const cartCtx = useContext(CartContext)
    const [cartData, setCartData] = useState([])

    const onRemoveCart = async (productID) => {

        // Remove @ and . from email using regular expressions
        const modifiedEmail = localStorage.getItem('email').replace(/[@.]/g, '');

        const response = await axios.get(`https://sh-ecommerce-default-rtdb.firebaseio.com/cart${modifiedEmail}.json`);
        const { data } = response
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
            (item) => item.productID === productID
        );
        const existingItem = fetchedProductList[existingCartItemIndex];
        // const updatedTotalAmount = products.totalAmount - existingItem.price;

        if (existingItem.quantity === 1) {
            try {
                await axios.delete(`https://sh-ecommerce-default-rtdb.firebaseio.com/cart${modifiedEmail}/${productID}.json`)

            } catch (err) {
                console.log(err)
            }
        }
        else {

            const updatedItem = {
                id: existingItem.id,
                title: existingItem.title,
                price: existingItem.price,
                imageUrl: existingItem.imageUrl,
                quantity: existingItem.quantity - 1
            };

            axios.put(`https://sh-ecommerce-default-rtdb.firebaseio.com/cart${modifiedEmail}/${productID}.json`, updatedItem
            ).then((response) => {
                console.log("Remove response", response)
            }).catch((error) => {
                console.log(error)
            })
        }

        // total amount calculation
        const getResponse = await axios.get(`https://sh-ecommerce-default-rtdb.firebaseio.com/cart${modifiedEmail}.json`)
        const data1 = getResponse.data
        const fetchedProductList1 = [];
        for (const productID in data1) {

            fetchedProductList1.push({
                productID,
                id: data1[productID].id,
                title: data1[productID].title,
                imageUrl: data1[productID].imageUrl,
                price: data1[productID].price,
                quantity: data1[productID].quantity,
            })
        }
        const totalAmount = fetchedProductList1.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)

        //////

        cartCtx.dispatch({
            type: 'AMOUNT',
            totalAmount
        })

        ////

        cartCtx.dispatch({
            type: 'ISDELETEADD'
        })
    }

    const purchaseHandler = async () => {
        // // Remove @ and . from email using regular expressions
        const modifiedEmail = localStorage.getItem('email').replace(/[@.]/g, '');

        await axios.delete(`https://sh-ecommerce-default-rtdb.firebaseio.com/cart${modifiedEmail}.json`).then((response) => {
            cartCtx.dispatch({
                type: 'CARTITEMS',
                numberOfCartItems: 0
            })

            cartCtx.dispatch({
                type: 'AMOUNT',
                totalAmount: 0
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

        const response = await axios.get(`https://sh-ecommerce-default-rtdb.firebaseio.com/cart${modifiedEmail}.json`);
        const { data } = response
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

        setCartData(fetchedProductList)
        cartCtx.dispatch({ type: 'CARTITEMS', numberOfCartItems: fetchedProductList.length || 0 })
    }


    const onChangeQuantity = async (productID) => {
        // Remove @ and . from email using regular expressions
        const modifiedEmail = localStorage.getItem('email').replace(/[@.]/g, '');

        const response = await axios.get(`https://sh-ecommerce-default-rtdb.firebaseio.com/cart${modifiedEmail}.json`);
        const { data } = response
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
            (item) => item.productID === productID
        );
        const existingItem = fetchedProductList[existingCartItemIndex];

        // const updatedTotalAmount = products.totalAmount + existingItem.price;
        let updatedItems;


        const updatedItem = {
            id: existingItem.id,
            title: existingItem.title,
            price: existingItem.price,
            imageUrl: existingItem.imageUrl,
            quantity: existingItem.quantity + 1
        };

        axios.put(`https://sh-ecommerce-default-rtdb.firebaseio.com/cart${modifiedEmail}/${productID}.json`, updatedItem
        ).then((response) => {
            console.log("Remove response", response)
        }).catch((error) => {
            console.log(error)
        })


        // total amount calculation
        const getResponse = await axios.get(`https://sh-ecommerce-default-rtdb.firebaseio.com/cart${modifiedEmail}.json`)
        const data1 = getResponse.data
        const fetchedProductList1 = [];
        for (const productID in data1) {

            fetchedProductList1.push({
                productID,
                id: data1[productID].id,
                title: data1[productID].title,
                imageUrl: data1[productID].imageUrl,
                price: data1[productID].price,
                quantity: data1[productID].quantity,
            })
        }
        const totalAmount = fetchedProductList1.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)

        //////

        cartCtx.dispatch({
            type: 'AMOUNT',
            totalAmount
        })

        ////

        cartCtx.dispatch({
            type: 'ISDELETEADD'
        })

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
                {cartData.length > 0 && cartData.map((item) => <div class="cart-row">
                    <span class='cart-item cart-column'>
                        <img class='cart-img' src={item.imageUrl} alt="" />
                        <span>{item.title}</span>
                    </span>
                    {/* price */}
                    <span class='cart-price cart-column'>{item.price}</span>
                    {/* quantity */}
                    <span class='cart-quantity cart-column'>
                        <button class='remove-cart-btn' onClick={() => { onRemoveCart(item.productID) }}>-</button>
                        <input type="text" value={item.quantity} />
                        <button onClick={() => { onChangeQuantity(item.productID) }}>+</button>

                    </span>
                </div>)}

            </div>

            <div class="cart-total">
                <span>
                    <span class="total-title"> <strong>Total</strong>
                    </span>
                    $<span id="total-value">{cartCtx.totalAmount || 0}</span>
                </span>
            </div>
            <button class="purchase-btn" type="button" onClick={purchaseHandler}>PURCHASE</button>
        </section>


    )
}


export default Cart;





