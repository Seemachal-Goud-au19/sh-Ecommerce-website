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
                <li><Link to=''><FaYoutube /></Link></li>
                <li><Link to=''><SiSpotify /></Link></li>
                <li><Link to=''><FaFacebookSquare /></Link></li>
            </ul>
        </div>
    </footer>
    )
}

export default Footer



