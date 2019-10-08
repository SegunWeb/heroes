import React from 'react';
import { Link } from 'react-router-dom';

import '../fonts/fonts.css'
import "./footer.css"

const Footer = () => {
    return (
        <nav className="footer">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/marvel'>Marvel</Link></li>
                <li><Link to='/dc'>Dc</Link></li>
            </ul>
        </nav>
    )
};
export default Footer;