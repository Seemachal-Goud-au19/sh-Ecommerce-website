import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import CartContext from '../store/cart-context';

const Header = ({ setIsShowCart }) => {
    const cartCtx = useContext(CartContext)
    const numberOfCartItems = cartCtx.items.length
    const { pathname } = useLocation();
    return (
        <Navbar expand="lg" className="" style={{ backgroundColor: 'black' }}>
            <Container>
                <Navbar.Brand href="/" style={{ color: 'white' }}>HOME</Navbar.Brand>
                <Navbar.Brand href="#" style={{ color: 'white' }}>STORE</Navbar.Brand>
                <Navbar.Brand href="/about" style={{ color: 'white' }}>ABOUT</Navbar.Brand>
                {!pathname.includes('about') &&
                    <div>
                        <Button variant="outline-info" onClick={() => setIsShowCart(true)}>Cart</Button>
                        <span className='cart-number' style={{ color: 'white' }}>{numberOfCartItems}</span>
                    </div>
                }
            </Container>
        </Navbar>
    );
}

export default Header;