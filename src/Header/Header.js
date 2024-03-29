import React from 'react';
import { Link } from 'react-router-dom';

import '../fonts/fonts.css'
import "./header.css"

const Header = () => {
    return (
        <nav className="header">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/marvel'>Marvel</Link></li>
                <li><Link to='/dc'>Dc</Link></li>
                <li><Link to='/contacts'>Contacts</Link></li>
            </ul>
        </nav>
    )

};

export default Header;