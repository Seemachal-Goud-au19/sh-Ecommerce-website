import React from 'react'

import NavBar from './Navbar'
import Button from 'react-bootstrap/Button';
import './Header.css'
import { useLocation } from 'react-router-dom';

const Header = ({ setIsShowCart }) => {
    const { pathname } = useLocation()
    return (
        <div className='header'>
            <NavBar setIsShowCart={setIsShowCart} />
            <div>
                <h1>The Generics</h1>
                {!pathname.includes('about') || !pathname.includes('store') || !pathname.includes('contact') && <> <Button variant="outline-info" className='latest-album'>Get our Latest Album</Button>
                    <Button variant="outline-inf" className="play-btn">►</Button> </>}

            </div>
        </div>

    )
}

export default Header