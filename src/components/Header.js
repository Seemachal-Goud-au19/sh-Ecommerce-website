import React from 'react'

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Header=({setIsShowCart})=> {
    return (
        <Navbar expand="lg" className="" style={{ backgroundColor: 'black' }}>
            <Container>
                <Navbar.Brand href="#" style={{ color: 'white' }}>HOME</Navbar.Brand>
                <Navbar.Brand href="#" style={{ color: 'white' }}>STORE</Navbar.Brand>
                <Navbar.Brand href="#" style={{ color: 'white' }}>ABOUT</Navbar.Brand>
               <div><Button variant="outline-info" onClick={()=>setIsShowCart(true)}>Cart</Button>
               <span className='cart-number' style={{color:'white'}}>0</span>
               </div> 
            </Container>
        </Navbar>
    );
}

export default Header;