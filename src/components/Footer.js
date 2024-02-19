import React from 'react'
import { FaYoutube } from "react-icons/fa6";
import { SiSpotify } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from 'react-router-dom';

import "./Footer.css"

const Footer = () => {
    return (
        <footer>
        <div class="footer-title">
            The Generics
        </div>
        <div class="footer-icons">
            <ul>
                <li><Link to='https://www.youtube.com/' className='youtube'><FaYoutube /></Link></li>
                <li><Link to='https://open.spotify.com/' className='spotify'><SiSpotify /></Link></li>
                <li><Link to='https://www.facebook.com/' className='fb'><FaFacebookSquare /></Link></li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer



