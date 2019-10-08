import React from 'react';
import { Link } from 'react-router-dom';
import Posts from "../Posts/Posts"

import './home.css'

const Home = () => (
    <main>
        <h1>Hi, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem inventore odio reprehenderit?</h1>

        <div className="wrapper">
            <div className="marvel">
                <Link  to="/marvel">
                    <img src="http://i.imgur.com/J8EgX2E.png" alt="marvel"/>
                </Link>
            </div>
            <div className="dc">
                <Link  to="/dc">
                    <img src="https://i.pinimg.com/originals/bc/cd/d4/bccdd46d76e7f565448ba54c935b20a9.jpg" alt="dc"/>
                </Link>
            </div>
        </div>

        <Posts />
    </main>
);

export default Home;