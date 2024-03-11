import React, { useContext, useEffect } from 'react'
import { useLocation, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import CartContext from '../store/cart-context';
import axios from 'axios';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { CgProfile } from "react-icons/cg";

import './Navbar.css'

const NavBar = ({ setIsShowCart }) => {
    const cartCtx = useContext(CartContext)
    // const numberOfCartItems = cartCtx.items.length
    const { pathname } = useLocation();
    const userEmail = localStorage.getItem('email')

    const getProductItems = async () => {

        // Remove @ and . from email using regular expressions
        const modifiedEmail = localStorage.getItem('email')?.replace(/[@.]/g, '');

        const response = await axios.get(`https://crudcrud.com/api/a007a6d4eac247abbc429216d38717e6/cart${modifiedEmail}`);

        cartCtx.dispatch({ type: 'CARTITEMS', numberOfCartItems: response?.data[0]?.items.length || 0 })
    }

    useEffect(() => {
        getProductItems()
    }, [cartCtx.numberOfCartItems])


    return (
        <Navbar expand="lg" className="navbar" style={{ backgroundColor: 'black' }}>
            <Container>
                <NavLink to="/">HOME</NavLink>
                <NavLink to="/store">STORE</NavLink >
                <NavLink to="/about">ABOUT</NavLink >
                <NavLink to="/contact">CONTACT</NavLink >
                {/* {cartCtx.isLoggedIn && <NavLink to='/profile'>Profile</NavLink>} */}
                {!cartCtx.isLoggedIn ? <NavLink to="/login" style={{ color: 'white' }}>Login</NavLink > : <button onClick={cartCtx.logout}>Logout</button>}
                {(pathname.includes('store') && cartCtx.isLoggedIn) &&
                    <div>
                        <Button variant="outline-info" onClick={() => setIsShowCart(true)}>Cart</Button>
                        <span className='cart-number' style={{ color: 'white' }}>{cartCtx.numberOfCartItems}</span>
                    </div>
                }
                {cartCtx.isLoggedIn && <OverlayTrigger
                    placement="bottom"
                    overlay={<Tooltip id="button-tooltip-2">{userEmail}</Tooltip>}>
                    <span className="profile-icon"><CgProfile /></span>
                </OverlayTrigger>}
            </Container>
        </Navbar>
    );
}

export default NavBar;

