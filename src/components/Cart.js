import React,{useContext} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CartContext from '../store/cart-context';

const Cart = ({ setIsShowCart }) => {
    const cartCtx = useContext(CartContext)

    const onRemoveCart=(id)=>{
        cartCtx.removeItem(id);
    }
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
                    <Col>ACTION</Col>
                </Row>
                {cartCtx?.items.map((item) => <Row>
                    <Col>{item.title}</Col>
                    <Col>{item.price}</Col>
                    <Col>{item.quantity}</Col>
                   <Col><button onClick={()=>{onRemoveCart(item.id)}}>remove</button></Col>
                </Row>)}

            </Container>
            <div class="cart-total">
                <span>
                    <span class="total-title"> <strong>Total</strong>
                    </span>
                    $<span id="total-value">{cartCtx.totalAmount}</span>
                </span>
            </div>
            <Button variant="info" style={{ color: 'white' }}>PURCHASE</Button>{' '}
        </section>
    )
}


export default Cart;



