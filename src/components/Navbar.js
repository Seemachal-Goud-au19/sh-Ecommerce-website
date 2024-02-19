import React, { useContext,useEffect } from 'react'
import { useLocation, NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import CartContext from '../store/cart-context';
import axios from 'axios';

const NavBar = ({ setIsShowCart }) => {
    const cartCtx = useContext(CartContext)
    const numberOfCartItems = cartCtx.items.length
    const { pathname } = useLocation();


    const getProductItems = async () => {

        // Remove @ and . from email using regular expressions
        const modifiedEmail = localStorage.getItem('email')?.replace(/[@.]/g, '');

        const response = await axios.get(`https://crudcrud.com/api/92bae8db60644641be91754d3e1dcaab/cart${modifiedEmail}`);
       
        cartCtx.dispatch({ type: 'CARTITEMS', numberOfCartItems: response?.data[0]?.items.length || 0 })
    }

    useEffect(() => {
        getProductItems()
    }, [cartCtx.numberOfCartItems])

    console.log("NAVABARA")

    return (
        <Navbar expand="lg" className="" style={{ backgroundColor: 'black' }}>
            <Container>
                <NavLink to="/" style={{ color: 'white' }}>HOME</NavLink>
                <NavLink to="/store" style={{ color: 'white' }}>STORE</NavLink >
                <NavLink to="/about" style={{ color: 'white' }}>ABOUT</NavLink >
                <NavLink to="/contact" style={{ color: 'white' }}>CONTACT</NavLink >
                {/* {cartCtx.isLoggedIn && <NavLink to='/profile'>Profile</NavLink>} */}
                {!cartCtx.isLoggedIn ? <NavLink to="/login" style={{ color: 'white' }}>Login</NavLink > : <button onClick={cartCtx.logout}>Logout</button>}
                {(pathname.includes('store') && cartCtx.isLoggedIn) &&
                    <div>
                        <Button variant="outline-info" onClick={() => setIsShowCart(true)}>Cart</Button>
                        <span className='cart-number' style={{ color: 'white' }}>{cartCtx.numberOfCartItems}</span>
                    </div>
                }
            </Container>
        </Navbar>
    );
}

export default NavBar;

