import React from 'react'

import NavBar from './Navbar'
import Button from 'react-bootstrap/Button';
import './Header.css'

const Header = ({ setIsShowCart }) => {

    return (
        <div className='header'>
            <NavBar setIsShowCart={setIsShowCart} />
            <div style={{ backgroundColor: 'gray', height: 'auto' }}>
                <h1 style={{ color: 'white', textAlign: 'center' }}>The Generics</h1>
                <Button variant="outline-info" className='latest-album'>Get our Latest Album</Button>
                <Button variant="outline-inf" className="play-btn">►</Button>

            </div>
        </div>

    )
}

export default Header