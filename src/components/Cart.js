import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CartContext from '../store/cart-context';
import axios from 'axios';

const Cart = ({ setIsShowCart }) => {
    const cartCtx = useContext(CartContext)
    const [cartData, setCartData] = useState({
        itemList: [],
        cartAmount: 0
    })

    const onRemoveCart = async (id) => {

        // Remove @ and . from email using regular expressions
        const modifiedEmail = localStorage.getItem('email').replace(/[@.]/g, '');

        const response = await axios.get(`https://crudcrud.com/api/5253eb73e9854a13ad4e993362ae7839/cart${modifiedEmail}`)

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

        axios.put(`https://crudcrud.com/api/5253eb73e9854a13ad4e993362ae7839/cart${modifiedEmail}/${response.data[0]?._id}`, {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        }).then((response) => {
            console.log("Remove response", response)
        }).catch((error) => {
            console.log(error)
        })
    }

    const getProductItems = async () => {

        // Remove @ and . from email using regular expressions
        const modifiedEmail = localStorage.getItem('email').replace(/[@.]/g, '');

        const response = await axios.get(`https://crudcrud.com/api/5253eb73e9854a13ad4e993362ae7839/cart${modifiedEmail}`);
        setCartData({
            itemList: response?.data[0]?.items || [],
            cartAmount: response?.data[0]?.totalAmount || 0
        })
        cartCtx.dispatch({ type: 'CARTITEMS', numberOfCartItems: response?.data[0]?.items.length || 0 })
    }

    useEffect(() => {
        getProductItems()
    }, [])

    return (
        <section id="cart" className="container" style={{
            display: 'block', width: '20vw',
            position: 'absolute',
            right: '0', bottom: '0',
            top: '148px',
            border: '1px solid brown',
            height: '100vh',
            zIndex: '10'
        }}>
            <h2 style={{ margin: '20px 70px' }}>CART</h2>
            <button className="cancel" style={{ position: 'absolute', right: '0', top: '0' }} onClick={() => setIsShowCart(false)}>X</button>
            <Container>
                <Row style={{ fontWeight: '600', textDecorationLine: 'underline' }}>
                    <Col>ITEM</Col>
                    <Col>PRICE</Col>
                    <Col>QUANTITY</Col>
                    <Col>ACTION</Col>
                </Row>
                {cartData?.itemList.length > 0 && cartData?.itemList.map((item) => <Row>
                    <Col>{item.title}</Col>
                    <Col>{item.price}</Col>
                    <Col>{item.quantity}</Col>
                    <Col><button onClick={() => { onRemoveCart(item.id) }}>remove</button></Col>
                </Row>)}

            </Container>
            <div className="cart-total">
                <span>
                    <span className="total-title"> <strong>Total</strong>
                    </span>
                    $<span id="total-value">{cartData?.cartAmount}</span>
                </span>
            </div>
            <Button variant="info" style={{ color: 'white' }}>PURCHASE</Button>{' '}
        </section>
    )
}


export default Cart;



