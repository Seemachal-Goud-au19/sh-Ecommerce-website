import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const cartElements = [

    {

        title: 'Colors',

        price: 100,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

        quantity: 2,

    },

    {

        title: 'Black and white Colors',

        price: 50,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

        quantity: 3,

    },

    {

        title: 'Yellow and Black Colors',

        price: 70,

        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

        quantity: 1,

    }

]

const Cart = ({ setIsShowCart }) => {
    return (
        <section id="cart" class="container" style={{
            display: 'block', width: '20vw',
            position: 'absolute',
            right: '0', bottom: '0',
            top: '148px',
            border: '1px solid brown',
            height:'100vh',
            zIndex:'10'
        }}>
            <h2 style={{margin:'20px 70px'}}>CART</h2>
            <button class="cancel" style={{position:'absolute',right:'0',top:'0'}} onClick={() => setIsShowCart(false)}>X</button>
            <Container>
                <Row style={{ fontWeight: '600', textDecorationLine: 'underline' }}>
                    <Col>ITEM</Col>
                    <Col>PRICE</Col>
                    <Col>QUANTITY</Col>
                </Row>
                {cartElements && cartElements.map((item) => <Row>
                    <Col>{item.title}</Col>
                    <Col>{item.price}</Col>
                    <Col>{item.quantity}</Col>
                </Row>)}

            </Container>
            <div class="cart-total">
                <span>
                    <span class="total-title"> <strong>Total</strong>
                    </span>
                    $<span id="total-value">0</span>
                </span>
            </div>
            <Button variant="info" style={{ color: 'white' }}>PURCHASE</Button>{' '}
        </section>
    )
}


export default Cart;



