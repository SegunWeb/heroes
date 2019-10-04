import React from 'react';
// import SearchBox from "../Search/SearchBox";
import { Link } from 'react-router-dom';
import "./Header.css"

const Header = () => {

    return (
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/contacts'>Contacts</Link></li>
                <li><Link to='/posts'>Posts</Link></li>
            </ul>
        </nav>
    )
};

export default Header;